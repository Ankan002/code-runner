import {atom} from "recoil";
import {EditorLanguage} from "types/editor-language";

export const editorLanguageAtom = atom<EditorLanguage>({
    key: "editorLanguageAtom",
    default: {
        LanguageName: "Javascript",
        EditorLanguage: "javascript",
        APILanguage: "js"
    }
});
