import type { NextPage } from 'next'
import {CustomHead} from "components/elements";
import {useRecoilValue} from "recoil";
import {useEffect, useState} from "react";
import dynamic from "next/dynamic";
import {EditorTheme} from "types/editor-theme";
import {editorThemeAtom, editorLanguageAtom} from "atoms";
import {Header} from "components/header";
import {EditorLanguage} from "types/editor-language";
import {Body} from "components/body";

const Home: NextPage = () => {

  const [code, setCode] = useState<string>("");
  const editorTheme = useRecoilValue<EditorTheme>(editorThemeAtom);
  const editorLanguage = useRecoilValue<EditorLanguage>(editorLanguageAtom);

  useEffect(() => {
      setCode("");
  }, [editorLanguage]);

  return (
    <div>
      <CustomHead title="Code Runner" />

      <div className="min-h-screen w-full flex flex-col font-fira-code bg-primaryLight">

          <Header />

          <Body />
      </div>
    </div>
  )
}

export default Home
