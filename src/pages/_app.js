import '../styles/globals.css'
import Layout from '../ui/layouts/Layout'
import AppContext from '../context/AppContext'
import Head from 'next/head'

export default function App({Component, pageProps}) {
  return (
    <Layout>
      <Head>
        <title>KI-Kompass</title>
        <meta name="description" content="Teacher AI" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <AppContext.Provider value={''}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </Layout>
  )
}