export const readUploadedCode = async(files: FileList | null) => {
    const ReadFilePromise = new Promise((resolve, reject) => {
        if(!files) reject("No files found");

        const fileReader = new FileReader();

        fileReader.onload = (e) => {
            if(typeof e.target?.result === "string"){
                resolve(e.target?.result);
            } else {
                reject("No code found!!!");
            }
        }

        if(files) fileReader.readAsText(files[0]);
    });

    try{
        const code = await ReadFilePromise;

        return {
            success: true,
            code: code as string
        }
    }
    catch(error){
        if(error instanceof Error){
            return {
                success: false,
                error: error.message
            }
        }

        return {
            success: false,
            error: "Some error caused!!"
        }
    }
}