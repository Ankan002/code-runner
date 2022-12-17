import { adjectives, names, uniqueNamesGenerator } from "unique-names-generator";

type APILanguage = "js" | "java" | "py" | "c" | "cpp" | "cs" | "go" | "rs" | "kt" | "ts";

export const downloadCode = (code: string, language: APILanguage) => {
    console.log(code);
    if(code.trim().length < 1 || code.trim() === "// Write your code here") {
        return {
            success: false,
            error: "Write some code to download!!"
        };
    }

    const filename = uniqueNamesGenerator({
        dictionaries: [adjectives, names],
        separator: "-"
    });

    const link = document.createElement("a");
    link.href = "data:text/plain;charset=utf-8," + encodeURIComponent(code);
    link.setAttribute("download", filename+"."+language);

    document.body.appendChild(link);
    link.click();
    link?.parentNode?.removeChild(link);

    return {
        success: true,
    };
};