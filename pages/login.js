import Head from 'next/head'
import Login from '../components/login'

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login />

    </div>
  )
}