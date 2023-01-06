import React, {useEffect} from 'react';
import {useRecoilValue, useRecoilState} from "recoil";
import {EditorLanguage} from "types/editor-language";
import {editorLanguageAtom, editorThemeAtom, codeAtom, stdInputAtom, consoleOutputAtom} from "atoms";
import {EditorTheme} from "types/editor-theme";
import {CodeEditor, OutputConsole, StdInput} from "components/elements";

const Body = () => {
    const [code, setCode] = useRecoilState<string>(codeAtom);
    const [stdInput, setStdInput] = useRecoilState<string>(stdInputAtom);
    const editorLanguage = useRecoilValue<EditorLanguage>(editorLanguageAtom);
    const editorTheme = useRecoilValue<EditorTheme>(editorThemeAtom);
    const consoleOutput = useRecoilValue<string>(consoleOutputAtom);

    const onEditorLanguageChange = (currentLanguage: string) => {
        if(currentLanguage === "Python"){
            setCode("# Write your code here");
        }
        else{
            setCode("// Write your code here");
        }
    };

    const onCodeChange = (newCode: string) => {
        setCode(newCode);
    };

    useEffect(() => {
        if(editorLanguage){
            onEditorLanguageChange(editorLanguage.LanguageName);
        }
    }, [editorLanguage]);

    return (
        <div className="px-5 flex-grow flex flex-col">
            <CodeEditor code={code} onChange={onCodeChange} editorLanguage={editorLanguage.EditorLanguage} editorTheme={editorTheme.Theme} placeholder="" />

            <div className="flex-1 w-full pb-3 flex sm:flex-row flex-col-reverse items-center justify-center">
                <StdInput title="Standard Input" placeholder="Put your standard inputs here" value={stdInput} onChange={e => setStdInput(e.target.value)} />

                <OutputConsole title="Output Console" output={consoleOutput} />
            </div>
        </div>
    );
};

export default Body;
