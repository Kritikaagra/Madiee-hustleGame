import Head from 'next/head'
import ScratchCard from '../components/scratchCard'
export default function Home() {
    return (
        <div className="flex min-h-screen justify-center items-center">
            <Head>
                <title>ScratchCard</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ScratchCard />
        </div>
    )
}
