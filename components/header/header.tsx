import React from 'react';
import Dropdown, {Option} from "react-dropdown";
import 'react-dropdown/style.css';
import {editorThemes} from "constants/editor-themes";
import {useRecoilState, useRecoilValue} from "recoil";
import {editorThemeAtom, editorLanguageAtom, codeAtom, compilingAtom, stdInputAtom, consoleOutputAtom} from "atoms";
import {EditorTheme} from "types/editor-theme";
import {editorLanguages} from "constants/editor-languages";
import {EditorLanguage} from "types/editor-language";
import {BsFillPlayFill, BsFillPauseFill} from "react-icons/bs";
import {compileCode} from "helpers";
import toast from "react-hot-toast";

const Header = () => {

    const [editorTheme, setEditorTheme] = useRecoilState<EditorTheme>(editorThemeAtom);
    const [editorLanguage, setEditorLanguage] = useRecoilState<EditorLanguage>(editorLanguageAtom);
    const [compiling, setCompiling] = useRecoilState<boolean>(compilingAtom);
    const [consoleOutput, setConsoleOutput] = useRecoilState<string>(consoleOutputAtom);

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

    return (
        <div className="w-full px-5 py-2 flex sm:flex-row flex-col sm:items-center sm:justify-between">
            <div className="flex-1 flex items-center sm:mb-0 mb-2 sm:justify-start justify-between">
                <Dropdown options={editorThemes} value={editorTheme.Theme} placeholder={editorTheme.ThemeName} onChange={EditorThemeOptionChange} className="mr-5" controlClassName="w-full font-fira-code" menuClassName="font-fira-code"  />

                <Dropdown options={editorLanguages} onChange={EditorLanguageOptionChange} placeholder={editorLanguage.LanguageName} value={editorLanguage.LanguageName} className="sm:mr-5" controlClassName="font-fira-code" menuClassName="font-fira-code" />
            </div>

            <div className="sm:w-40 w-full flex justify-end">
                <button className="w-12 p-2 border-2 border-black rounded-md flex justify-center items-center bg-primaryYellow" onClick={onCompileCodeClick}>
                    {
                        compiling ? (
                            <BsFillPauseFill size={25} />
                        ) : (
                            <BsFillPlayFill size={25}/>
                        )
                    }
                </button>
            </div>
        </div>
    );
};

export default Header;
