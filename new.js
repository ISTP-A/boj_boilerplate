const fs = require("fs")
const path = require("path")
const {
    submit_template,
    debug_input_template,
    line_template,
    graph_template,
    token_template,
} = require('./tmplate')

const [, , id, modeArg] = process.argv
const mode = modeArg || "line"

if (!id) {
    console.error("생성할 문제 번호를 입력하세요. 예: npm run new 1000")
    process.exit(1)
}

const ROOT_DIR = __dirname
const QUESTIONS_DIR = path.join(ROOT_DIR, "questions")

function ensureDir(dir) {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true })
    }
}

function questionPath(id, ext) {
    return path.join(QUESTIONS_DIR, `${id}${ext}`)
}

function logExist(filePath, label) {
    console.log(`이미 존재하는 ${label} 파일입니다: ${filePath}`)
}

function writeIfNotExists(filePath, content, label) {
    if (fs.existsSync(filePath)) {
        logExist(filePath, label)
        return false
    }
    fs.writeFileSync(filePath, content, "utf8")
    console.log(`${label} 파일 생성: ${filePath}`)
    return true
}

function buildBoilerplate(kind, mode) {
    if (kind === 'submit') return submit_template
    if (mode === "token") return token_template
    if (mode === "graph") return graph_template
    return line_template

}

function main() {
    ensureDir(QUESTIONS_DIR)

    const localJsPath = questionPath(id, ".js")
    const submitJsPath = questionPath(id, ".boj.js")
    const txtPath = questionPath(id, ".txt")

    const localBoilerplate = buildBoilerplate("local", mode)
    const submitBoilerplate = buildBoilerplate("submit", mode)

    writeIfNotExists(localJsPath, localBoilerplate, "로컬 JS")
    writeIfNotExists(submitJsPath, submitBoilerplate, "제출용 JS")

    if (!fs.existsSync(txtPath)) {
        fs.writeFileSync(txtPath, "", "utf8")
        console.log(`TXT 파일 생성: ${txtPath}`)
    } else {
        logExist(txtPath, "TXT")
    }
}

main()
