import Head from 'next/head'
import { Bai_Jamjuree } from '@next/font/google'
import Hero from '../containers/Hero/Hero'
import Social from '../containers/Social/Social'
import Clients from '../containers/Clients/Clients'

export default function Home() {
  return (
    <>
      <Head>
        <title>T & T Marketing</title>
        <meta
          name='description'
          content="Boosting Your Brand's Reach and ROI with TT Marketing's Expert Strategies"
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/logo.png' />
      </Head>
      <main>
        <Hero />
        <div>
          <Social />
        </div>
        <div>
          <Clients />
        </div>
      </main>
    </>
  )
}
