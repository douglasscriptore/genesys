
import { AppProps } from 'next/app'

import "../styles/global.scss";
import  Header  from './components/Header';
import  SubHeader  from './components/SubHeader';

function MyApp({ Component, pageProps }:AppProps) {
  return (
    <>
      <SubHeader/>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
