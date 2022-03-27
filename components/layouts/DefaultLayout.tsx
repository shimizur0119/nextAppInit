import { ReactNode, useEffect } from "react";
import Header from "../Header"
import Footer from "../Footer"
import Head from 'next/head'
import { useRouter } from 'next/router';

interface Props {
  children: ReactNode;
}

const DefaultLayout = ({ children }: Props) => {
  const router = useRouter();
  useEffect(() => {
    router.events.on('routeChangeStart', leave);
    router.events.on('routeChangeComplete', complete);

    return () => {
      router.events.off('routeChangeStart', leave);
      router.events.off('routeChangeComplete', complete)
    }
  }, []);
  function leave(e: any) {
    console.log('leave', e);
  }
  function complete(e: any) {
    console.log('complete', e);
  }
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default DefaultLayout