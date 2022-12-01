import {EditorLanguage} from "types/editor-language";

interface EditorLanguageOptions extends EditorLanguage {
    label: string;
    value: string;
}

export const editorLanguages: Array<EditorLanguageOptions> = [
    {
        LanguageName: "Javascript",
        EditorLanguage: "javascript",
        APILanguage: "js",
        label: "Javascript",
        value: "javascript",
    },
    {
        LanguageName: "Java",
        EditorLanguage: "java",
        APILanguage: "java",
        label: "Java",
        value: "java",
    },
    {
        LanguageName: "Python",
        EditorLanguage: "python",
        APILanguage: "py",
        label: "Python",
        value: "python",
    },
    {
        LanguageName: "C",
        EditorLanguage: "c_cpp",
        APILanguage: "c",
        label: "C",
        value: "c",
    },
    {
        LanguageName: "C++",
        EditorLanguage: "c_cpp",
        APILanguage: "cpp",
        label: "C++",
        value: "cpp",
    },
    {
        LanguageName: "Golang",
        EditorLanguage: "golang",
        APILanguage: "go",
        label: "Golang",
        value: "golang",
    },
    {
        LanguageName: "C#",
        EditorLanguage: "csharp",
        APILanguage: "cs",
        label: "C#",
        value: "csharp"
    },
    {
        LanguageName: "Rust",
        EditorLanguage: "rust",
        APILanguage: "rs",
        label: "Rust",
        value: "rust"
    },
    {
        LanguageName: "Kotlin",
        EditorLanguage: "kotlin",
        APILanguage: "kt",
        label: "Kotlin",
        value: "kotlin"
    },
    {
        LanguageName: "Typescript",
        EditorLanguage: "typescript",
        APILanguage: "ts",
        label: "Typescript",
        value: "typescript"
    }
];
