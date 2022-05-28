import Head from 'next/head'
import Shops from '../components/shops'
export default function Home() {
    return (
        <div className="flex min-h-screen justify-center items-center">
            <Head>
                <title>Shops</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Shops />
        </div>
    )
}
