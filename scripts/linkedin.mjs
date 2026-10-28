// Prints copy-ready text for a LinkedIn "Projects" entry. Usage: npm run linkedin [-- "Project name"]
// Defaults to the first (newest) project in src/data.ts.
import { projects } from '../src/data.ts'

const wanted = process.argv.slice(2).join(' ').trim().toLowerCase()
const project = wanted ? projects.find((p) => p.name.toLowerCase().includes(wanted)) : projects[0]

if (!project) {
  console.error(`No project matching "${wanted}". Available: ${projects.map((p) => p.name).join(', ')}`)
  process.exit(1)
}

const line = '-'.repeat(60)
console.log(`\nLinkedIn: Profile > Add profile section > Additional > Add projects\n${line}`)
console.log(`Project name:\n${project.name} | ${project.subtitle}\n`)
console.log(`Description:\n${project.points.map((p) => `- ${p}`).join('\n')}\n`)
console.log(`Skills (add each one):\n${project.tech.join(', ')}\n`)
console.log(`Project URL:\n${project.repo}\n`)
console.log(`Team:\n${project.kind === 'Individual' ? 'Individual project' : `${project.kind} project (add teammates if they are on LinkedIn)`}\n${line}\n`)
