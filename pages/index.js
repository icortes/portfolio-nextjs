import Head from 'next/head'
import AppBar from '../components/AppBar';
import AboutMe from '../components/AboutMe'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppBar />
      <AboutMe />
    </>
  )
}
