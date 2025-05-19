import { LANGUAGE_VERSIONS } from "../constants"

const API = axois.create({
    baseURL: "https://emkc.org/api/v2/piston"
})

export const executeCode = async (LanguageSelector, sourceCode) => {

    const response = await API.post("/execute", {

        "language": language,
        "version": LANGUAGE_VERSIONS[language],
        "files": [
            {
                "name": "my_cool_code.js",
                "content": "console.log(process.argv)"
            }
        ],

    })
}