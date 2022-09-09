import {atom} from "recoil";

export const stdInputAtom = atom<string>({
    key: "stdInputAtom",
    default: ""
});
