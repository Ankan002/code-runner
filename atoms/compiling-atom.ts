import {atom} from "recoil";

export const compilingAtom = atom<boolean>({
    key: "compilingAtom",
    default: false
});
