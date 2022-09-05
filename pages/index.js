import Head from "next/head";
import GalSlider from "../components/GalSlider";
import Hero from "../components/Hero";
import Instagram from "../components/Instagram";
import SliderData from '../components/SliderData';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Photography Next App</title>
        <meta name="description" content="Photography Nextjs App"/>
        <link rel="icon" href="/favicon.png"/>
      </Head>
      <Hero heading='Capture Photography' message='I capture moments in nature and keep them alive.'/>
      <GalSlider slides={SliderData}/>
      <Instagram />
    </div>
  )
}

