import '../styles/globals.css'
import Layout from '../ui/layouts/Layout'
import AppContext from '../context/AppContext'
import Head from 'next/head'

import { Open_Sans } from 'next/font/google'

const open_sans = Open_Sans({
  weight: '400',
  subsets: ['latin'],
})

export default function App({Component, pageProps}) {
  return (
    <Layout>
      <Head>
        <title>KI-Kompass</title>
        <meta name="description" content="Teacher AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/compass-black.svg" />
      </Head>
      <main className={open_sans.className}>
        <Component {...pageProps} />  
      </main>
    </Layout>
  )
}