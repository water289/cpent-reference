const fs = require('fs')
const path = require('path')

const dataDir = path.join(__dirname, '..', 'src', 'data')
const workflowsDir = path.join(dataDir, 'workflows')

const files = {
  zones: path.join(dataDir, 'zones.json'),
  tools: path.join(dataDir, 'tools.json'),
  techniques: path.join(dataDir, 'techniques.json'),
  workflows: path.join(dataDir, 'workflows.json'),
}

let zones = []
let tools = []
let techniques = []
let workflows = []

try {
  zones = JSON.parse(fs.readFileSync(files.zones, 'utf8'))
} catch (e) {
  console.warn('Could not read zones.json, starting fresh')
}

try {
  tools = JSON.parse(fs.readFileSync(files.tools, 'utf8'))
} catch (e) {
  console.warn('Could not read tools.json, starting fresh')
}

try {
  techniques = JSON.parse(fs.readFileSync(files.techniques, 'utf8'))
} catch (e) {
  console.warn('Could not read techniques.json, starting fresh')
}

try {
  workflows = JSON.parse(fs.readFileSync(files.workflows, 'utf8'))
} catch (e) {
  console.warn('Could not read workflows.json, starting fresh')
}

// Merge workflow files from src/data/workflows/ directory into the main array.
// This lets each zone's methodology live in a dedicated file while still
// being compiled into a single workflows.json for the app to consume.
if (fs.existsSync(workflowsDir)) {
  const dirEntries = fs.readdirSync(workflowsDir)
  const fileExt = '.json'
  for (const entry of dirEntries) {
    if (!entry.endsWith(fileExt)) continue
    const filePath = path.join(workflowsDir, entry)
    if (!fs.statSync(filePath).isFile()) continue
    try {
      const extra = JSON.parse(fs.readFileSync(filePath, 'utf8'))
      if (Array.isArray(extra)) {
        workflows.push(...extra)
      } else if (extra && typeof extra === 'object') {
        workflows.push(extra)
      }
    } catch (e) {
      console.warn(`Could not parse workflow file ${entry}: ${e.message}`)
    }
  }
}

// Deduplicate by id, preferring files from the workflows/ directory
// (they are appended last and overwrite earlier entries with the same id).
const seen = {}
const deduped = []
for (const wf of workflows) {
  if (seen[wf.id]) {
    // later occurrence overwrites
    const idx = deduped.findIndex(w => w.id === wf.id)
    if (idx >= 0) deduped[idx] = wf
  } else {
    seen[wf.id] = true
    deduped.push(wf)
  }
}
workflows = deduped

const totalCommands = tools.reduce((acc, t) => acc + (t.commands ? t.commands.length : 0), 0)

fs.writeFileSync(files.zones, JSON.stringify(zones, null, 2))
fs.writeFileSync(files.tools, JSON.stringify(tools, null, 2))
fs.writeFileSync(files.techniques, JSON.stringify(techniques, null, 2))
fs.writeFileSync(files.workflows, JSON.stringify(workflows, null, 2))

console.log(`Database updated: ${tools.length} tools, ${techniques.length} techniques, ${totalCommands} commands, ${zones.length} zones, ${workflows.length} workflows`)
