import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {RecoilRoot} from "recoil";
import {CustomToaster} from "components/elements";
import 'react-loading-skeleton/dist/skeleton.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <RecoilRoot>
        <Component {...pageProps} />
        <CustomToaster />
      </RecoilRoot>
  )
}

export default MyApp
