import { useState } from 'react'
import type { FormEvent } from 'react'
import { profile } from '../data'

type Status = 'idle' | 'sending' | 'sent' | 'error'

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle')

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    if (data.get('_honey')) return // bots fill the hidden field

    setStatus('sending')
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
          _subject: `Portfolio message from ${data.get('name')}`,
          _replyto: data.get('email'),
          _template: 'table',
          _captcha: 'false',
        }),
      })
      const json = await res.json()
      if (!res.ok || json.success === 'false' || json.success === false) throw new Error('failed')
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
