import '../styles/common.scss'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import DefaultLayout from '../components/layouts/DefaultLayout'

type NextPageWithLayout = NextPage & {
  tmp?: string
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // console.log("_app");
  //　もしLayoutをページごとで変えたくなったらここで判定して変える
  // console.log(Component.tmp);

  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}

export default MyApp
