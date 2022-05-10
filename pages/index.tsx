import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'


const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Instagram Rebuild 3.0 + 1.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      
    </div>
  )
}

export default Home
