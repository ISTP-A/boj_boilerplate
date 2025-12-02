const debug_input_template = `const path = require("path")
const name = path.basename(__filename, ".js")
const file = path.join(__dirname, \`\${name}.txt\`)
const raw = fs.readFileSync(file, "utf8").trim()`

const token_template = `const fs = require("fs")

const path = require("path")
const name = path.basename(__filename, ".js")
const file = path.join(__dirname, \`\${name}.txt\`)
const raw = fs.readFileSync(file, "utf8").trim()

const tokens = raw.split(/\\s+/)
let idx = 0

function main() {
  console.log(tokens)
}

main()
`

const graph_template = `const fs = require("fs")

const path = require("path")
const name = path.basename(__filename, ".js")
const file = path.join(__dirname, \`\${name}.txt\`)
const raw = fs.readFileSync(file, "utf8").trim()

const tokens = raw.split(/\\s+/)
let idx = 0

const n = Number(tokens[idx++])
const m = Number(tokens[idx++])
const graph = Array.from({ length: n + 1 }, () => [])

for (let i = 0; i < m; i++) {
  const u = Number(tokens[idx++])
  const v = Number(tokens[idx++])
  graph[u].push(v)
  graph[v].push(u)
}

function main() {
  console.log(graph)
}

main()
`

const line_template = `const fs = require("fs")

const path = require("path")
const name = path.basename(__filename, ".js")
const file = path.join(__dirname, \`\${name}.txt\`)
const raw = fs.readFileSync(file, "utf8").trim()

const input = raw.split("\\n")

function main() {
  console.log(input)
}

main()
`

const submit_template = `const fs = require("fs")

// 1. 입력값이 한 개일 때(한 줄)
// const input = fs.readFileSync("/dev/stdin").toString().trim()

// 2. 입력값이 여러 개일 때(한 줄에 공백으로 구분)
/* ex)
110 78 158
*/
// const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ")

// 3. 입력값이 여러 줄일 때
/* ex)
110
78
158
*/
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\\n")

// 4. 입력값이 첫 번째 줄에는 입력 값의 길이(n), 두 번째 줄에 공백으로 구분된 입력값이 주어질 때
/* ex)
3
110 78 158
*/
// const [n, input] = fs.readFileSync("/dev/stdin").toString().trim().split("\\n")

// 5. 입력값이 첫 번째 줄에는 입력 값의 길이(n), n개의 줄에 걸쳐서 한 줄에 하나의 입력값이 주어질 때
/* ex)
3
110
78
158
*/
// const [n, input] = fs.readFileSync("/dev/stdin").toString().trim().split("\\n")

function main() {
  console.log(input)
}

main()
`

module.exports = {
  debug_input_template,
  token_template,
  graph_template,
  line_template,
  submit_template,
}