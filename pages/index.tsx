import type { NextPage } from 'next'
import {CustomHead} from "components/elements";
import {Header} from "components/header";
import {Body} from "components/body";

const Home: NextPage = () => {

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
