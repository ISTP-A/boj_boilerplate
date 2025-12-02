const { spawn } = require("child_process")
const path = require("path")
const fs = require("fs")

const id = process.argv[2]

if (!id) {
    console.error("문제 번호를 입력하세요. 예: npm run test 1000")
    process.exit(1)
}

const file = path.join(__dirname, "questions", `${id}.js`)

if (!fs.existsSync(file)) {
    console.error(`문제 파일이 없습니다: ${file}`)
    console.error(`먼저 템플릿을 생성하세요: npm run new ${id}`)
    process.exit(1)
}

const child = spawn("node", [file], {
    stdio: "inherit"
})

child.on("exit", (code) => {
    process.exit(code)
})
