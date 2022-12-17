import React, {ChangeEvent, useRef, useState} from 'react';
import Dropdown, {Option} from "react-dropdown";
import 'react-dropdown/style.css';
import {editorThemes} from "constants/editor-themes";
import {useRecoilState, useRecoilValue, useSetRecoilState} from "recoil";
import {editorThemeAtom, editorLanguageAtom, codeAtom, compilingAtom, stdInputAtom, consoleOutputAtom} from "atoms";
import {EditorTheme} from "types/editor-theme";
import {editorLanguages} from "constants/editor-languages";
import {EditorLanguage} from "types/editor-language";
import {BsFillPlayFill, BsFillPauseFill} from "react-icons/bs";
import {TbDownload} from "react-icons/tb";
import {FiUploadCloud} from "react-icons/fi";
import {compileCode, readUploadedCode, downloadCode} from "helpers";
import toast from "react-hot-toast";

const Header = () => {

    const [editorTheme, setEditorTheme] = useRecoilState<EditorTheme>(editorThemeAtom);
    const [editorLanguage, setEditorLanguage] = useRecoilState<EditorLanguage>(editorLanguageAtom);
    const [compiling, setCompiling] = useRecoilState<boolean>(compilingAtom);
    const setConsoleOutput = useSetRecoilState<string>(consoleOutputAtom);
    const setCode = useSetRecoilState<string>(codeAtom);
    const [selectedFile, setSelectedFile] = useState<string>("");
    const inputRef = useRef<HTMLInputElement>(null);

    const code = useRecoilValue<string>(codeAtom);
    const stdInput = useRecoilValue<string>(stdInputAtom);

    const EditorThemeOptionChange = (e: Option) => {
        setEditorTheme({
            ThemeName: e.label ? e.label.toString() : "",
            Theme: e.value
        })
    }

    const EditorLanguageOptionChange = (e: Option) => {
        for(let editorLanguage of editorLanguages) {
            if(e.label === editorLanguage.LanguageName){
                setEditorLanguage({
                    LanguageName: editorLanguage.LanguageName,
                    EditorLanguage: editorLanguage.EditorLanguage,
                    APILanguage: editorLanguage.APILanguage
                });
                break;
            }
        }
    };

    const onCompileCodeClick = async () => {
        if(compiling) return;

        setCompiling(true);

        setConsoleOutput((prev) => prev + "➜ 🚀 Compiling...\n");

        const response = await compileCode(code, editorLanguage.APILanguage, stdInput);

        setCompiling(false);

        if(response?.httpError) {
            toast.error(response.error);
            setConsoleOutput((prev) => prev + "➜ ❌ Compilation Failed 🚑... \n");
            return;
        }

        if(!response?.success){
            setConsoleOutput((prev) => prev + "➜ ❌ Compilation Failed 🚑... \n");
            (response?.error.toString().endsWith("\n")) ? setConsoleOutput((prev) => prev + `${response?.error}`) : setConsoleOutput((prev) => prev + `${response?.error}\n`);
            return;
        }

        setConsoleOutput((prev) => prev + "➜ ✅ Compiled Successfully ✨...\n");
        (response.output.toString().endsWith("\n")) ? setConsoleOutput((prev) => prev + `${response.output}`) : setConsoleOutput((prev) => prev + `${response.output}\n`);
    }

    const onDownloadCodeClick = () => {
        const downloadResponse = downloadCode(code, editorLanguage.APILanguage);

        if(!downloadResponse.success){
            toast.error(downloadResponse.error ?? "");
            return;
        }

        toast.success("Downloaded Successfully!!");
    }

    const onUploadCodeClick = () => {
        if(inputRef.current) inputRef.current.click();
    }

    const onUploadedFileChange = async(e: ChangeEvent<HTMLInputElement>) => {
        const codeResponse = await readUploadedCode(e.target.files);

        setSelectedFile("");

        if(!codeResponse.success){
            toast.error(codeResponse.error ?? "");
            return;
        }

        if(codeResponse.code) setCode(codeResponse.code);
    };

    return (
        <nav className="w-full px-5 py-2 flex sm:flex-row flex-col sm:items-center sm:justify-between">
            <div className="flex-1 flex items-center sm:mb-0 mb-2 sm:justify-start justify-between">
                <Dropdown options={editorThemes} value={editorTheme.Theme} placeholder={editorTheme.ThemeName} onChange={EditorThemeOptionChange} className="mr-5" controlClassName="w-full font-fira-code" menuClassName="font-fira-code"  />

                <Dropdown options={editorLanguages} onChange={EditorLanguageOptionChange} placeholder={editorLanguage.LanguageName} value={editorLanguage.LanguageName} className="sm:mr-5" controlClassName="font-fira-code" menuClassName="font-fira-code" />
            </div>

            <div className="sm:w-40 w-full flex justify-end">
                <button className="w-12 p-2 border-2 border-black rounded-md flex justify-center items-center bg-primaryYellow mr-2 hover:cursor-pointer relative" type="button" aria-label="Upload your code" onClick={onUploadCodeClick}>
                    {
                        <FiUploadCloud size={25} />
                    }

                    <input type="file" accept={"."+editorLanguage.APILanguage} className="absolute w-0 h-0 hover:file:cursor-pointer" ref={inputRef} value={selectedFile} onChange={onUploadedFileChange} aria-label="input for code files"
                    />
                </button>
                <button className="w-12 p-2 border-2 border-black rounded-md flex justify-center items-center bg-primaryYellow mr-2" onClick={onDownloadCodeClick} type="button" aria-label="Download the Code.">
                    {
                        <TbDownload size={25} />
                    }
                </button>
                <button className="w-12 p-2 border-2 border-black rounded-md flex justify-center items-center bg-primaryYellow" onClick={onCompileCodeClick} type="button" aria-label="Run the Code.">
                    {
                        compiling ? (
                            <BsFillPauseFill size={25} />
                        ) : (
                            <BsFillPlayFill size={25}/>
                        )
                    }
                </button>
            </div>
        </nav>
    );
};

export default Header;
