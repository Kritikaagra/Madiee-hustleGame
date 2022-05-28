import Head from 'next/head'
import TimeUp from '../components/timeUp'

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <Head>
        <title>Time Up</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TimeUp />

    </div>
  )
}