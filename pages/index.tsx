import type { NextPage } from 'next'
import {CustomHead} from "components/elements";
import {Header} from "components/header";
import {Body} from "components/body";

const Home: NextPage = () => {

  return (
    <div>
      <CustomHead title="Compile Me Playground" />

      <div className="min-h-screen w-full flex flex-col font-fira-code bg-primaryLight">
          <Header />

          <Body />
      </div>
    </div>
  )
}

export default Home
