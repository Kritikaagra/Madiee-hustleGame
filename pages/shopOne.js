import Head from 'next/head'
import ShopOne from '../components/shopOne'
export default function Home() {
    return (
        <div className="flex min-h-screen justify-center items-center">
            <Head>
                <title>Shop1</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <ShopOne />
        </div>
    )
}
