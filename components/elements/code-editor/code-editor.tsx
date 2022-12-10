import React from 'react';
import dynamic from "next/dynamic";

const Ace = dynamic(
    async () => {
        const ace = await import("react-ace");
        require("ace-builds/src-noconflict/ext-language_tools");
        require("ace-builds/src-noconflict/ext-beautify");
        require("ace-builds/src-noconflict/ext-spellcheck");
        require("ace-builds/src-noconflict/keybinding-vscode");
        require("ace-builds/src-noconflict/ext-error_marker");
        require("ace-builds/src-noconflict/mode-javascript");
        require("ace-builds/src-noconflict/mode-java");
        require("ace-builds/src-noconflict/mode-golang");
        require("ace-builds/src-noconflict/mode-python");
        require("ace-builds/src-noconflict/mode-c_cpp");
        require("ace-builds/src-noconflict/mode-csharp");
        require("ace-builds/src-noconflict/mode-rust");
        require("ace-builds/src-noconflict/mode-kotlin");
        require("ace-builds/src-noconflict/mode-typescript");
        require("ace-builds/src-noconflict/snippets/java");
        require("ace-builds/src-noconflict/snippets/javascript");
        require("ace-builds/src-noconflict/snippets/python");
        require("ace-builds/src-noconflict/snippets/golang");
        require("ace-builds/src-noconflict/snippets/c_cpp");
        require("ace-builds/src-noconflict/snippets/csharp");
        require("ace-builds/src-noconflict/snippets/typescript");
        require("ace-builds/src-noconflict/snippets/rust");
        require("ace-builds/src-noconflict/snippets/kotlin");
        require("ace-builds/src-noconflict/theme-dracula");
        require("ace-builds/src-noconflict/theme-github");
        require("ace-builds/src-noconflict/theme-twilight");
        require("ace-builds/src-noconflict/theme-terminal");
        require("ace-builds/src-noconflict/theme-one_dark");
        require("ace-builds/src-noconflict/theme-monokai");
        require("ace-builds/src-noconflict/theme-eclipse");
        require("ace-builds/src-noconflict/theme-xcode");

        let aceConfig = require("ace-builds/src-min-noconflict/ace");
        aceConfig.config.set(
            "basePath",
            "https://cdn.jsdelivr.net/npm/ace-builds/src-noconflict/"
        );

        aceConfig.config.setModuleUrl(
            "ace-builds/src-noconflict/worker-javascript",
            "https://cdn.jsdelivr.net/npm/ace-builds/src-noconflict/worker-javascript.js"
        );

        return ace.default;
    },
    {
        loading: () => (
            <div className="w-full h-[55vh] flex items-center justify-center text-primaryDark text-lg">
                Loading...
            </div>
        ),
        ssr: false
    }
);

interface Props {
    code: string;
    onChange: (code: string) => void;
    editorLanguage: "javascript" | "java" | "python" | "c_cpp" | "csharp" | "golang" | "kotlin" | "rust" | "typescript";
    editorTheme: string;
    placeholder: string;
}

const CodeEditor = (props: Props) => {
    const { code, onChange, editorLanguage, editorTheme, placeholder } = props;

    return (
        <Ace
            value={code}
            placeholder={placeholder}
            mode={editorLanguage}
            theme={editorTheme}
            name="code-editor"
            fontSize={18}
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            onChange={onChange}
            setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                showLineNumbers: true,
                tabSize: 2,
                fontFamily: "'Fira Code', monospace",
                spellcheck: true,
                enableMultiselect: true,
                cursorStyle: "smooth",
                wrap: true,
                showGutter: true,
                behavioursEnabled: true,
                useWorker: true
            }}
            height="55vh"
            width="100%"
            wrapEnabled={true}
            className="mt-2"
            keyboardHandler="vscode"
            enableSnippets={true}
        />
    );
};

export default CodeEditor;
