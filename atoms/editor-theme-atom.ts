import {atom} from "recoil";
import {EditorTheme} from "types/editor-theme";

export const editorThemeAtom = atom<EditorTheme>({
    key: "editorThemeAtom",
    default: {
        ThemeName: "Dracula",
        Theme: "dracula"
    }
});
