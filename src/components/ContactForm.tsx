import { useState } from 'react'
import type { FormEvent } from 'react'
import { profile } from '../data'

type Status = 'idle' | 'sending' | 'sent' | 'error' | 'mailto'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    if (data.get('_honey')) return // bots fill the hidden field

    const name = String(data.get('name'))
    const email = String(data.get('email'))
    const message = String(data.get('message'))

    // No form service configured: open the visitor's mail app with the message prefilled.
    if (!profile.contactAccessKey) {
      const subject = encodeURIComponent(`Portfolio message from ${name}`)
      const body = encodeURIComponent(`${message}\n\n${name}\n${email}`)
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
      setStatus('mailto')
      return
    }

    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: profile.contactAccessKey,
          subject: `Portfolio message from ${name}`,
          from_name: name,
          name,
          email,
          message,
        }),
      })
      const json = await res.json()
      if (!res.ok || !json.success) throw new Error('failed')
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="contact-form" onSubmit={onSubmit}>
      <div className="field-row">
        <label>
          Name
          <input name="name" type="text" required maxLength={100} autoComplete="name" />
        </label>
        <label>
          Email
          <input name="email" type="email" required maxLength={150} autoComplete="email" />
        </label>
      </div>
      <label>
        Message
        <textarea name="message" required minLength={10} maxLength={2000} rows={5} />
      </label>
      <input name="_honey" type="text" tabIndex={-1} autoComplete="off" className="honey" aria-hidden="true" />
      <div className="form-footer">
        <button type="submit" className="btn primary" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </button>
        <p className="form-status" role="status" aria-live="polite">
          {status === 'sent' && 'Thanks! Your message was sent, I will get back to you soon.'}
          {status === 'mailto' && 'Your mail app should open with the message ready to send.'}
          {status === 'error' && (
            <>
              Something went wrong. Please email me directly at <a href={`mailto:${profile.email}`}>{profile.email}</a>.
            </>
          )}
        </p>
      </div>
    </form>
  )
}
