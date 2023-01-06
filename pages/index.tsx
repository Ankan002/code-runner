import type { NextPage } from 'next'
import {CustomHead} from "components/elements";
import {Header} from "components/header";
import {Body} from "components/body";
import {WarningStrip} from "components/elements";

const Home: NextPage = () => {

  return (
    <div>
      <CustomHead title="Compile Me Playground" />

      <div className="min-h-screen w-full flex flex-col font-fira-code bg-primaryLight">
          <WarningStrip warning="This is an experimental preview of the actual product. There might be performance issues." />

          <Header />

          <Body />
      </div>
    </div>
  )
}

export default Home
