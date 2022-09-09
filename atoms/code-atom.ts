import {atom} from "recoil";

export const codeAtom = atom<string>({
    key: "codeAtom",
    default: ""
});
