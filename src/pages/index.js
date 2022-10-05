import Head from 'next/head'
import { Navbar } from '../components/Navbar'
import { Banner } from '../components/Banner'
import { Skills } from '../components/Skills'
import { AboutMe } from '../components/AboutMe'
import { Projects } from '../components/Projects'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title> Bruno Andrade </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Banner />
      <Skills />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
