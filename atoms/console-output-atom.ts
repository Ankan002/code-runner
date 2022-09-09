import {atom} from "recoil";

export const consoleOutputAtom = atom<string>({
    key: "consoleOutputAtom",
    default: "➜ Welcome to code runner. Your output will appear here...\n"
});
