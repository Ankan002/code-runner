type APILanguage = "js" | "java" | "py" | "c" | "cpp" | "cs" | "go" | "rs" | "kt" | "ts";

export const compileCode = async(code: string, language: APILanguage, standardInput: string) => {
    if(code.length < 1) return;
    try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_COMPILE_ENDPOINT}/compiler`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                code,
                language,
                stdInput: standardInput
            })
        });

        const data = await response.json();

        if(data.success === false){
            return {
                httpError: false,
                success: data.success,
                error: data.error
            };
        }

        return {
            httpError: false,
            success: data.success,
            output: data.output
        };
    }
    catch (error) {
        if(error instanceof Error){
            return {
                httpsError: true,
                success: false,
                error: error.message
            };
        }

        return {
            httpsError: true,
            success: false,
            error: "Internal Server Error"
        };
    }
};