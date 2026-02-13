import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Praktikum 01</title>
        <meta name="description" content="Praktikum Next.js Pages Router" />
      </Head>

      <main className={inter.className}>
        <div>
          <h1>Praktikum Next.js Pages Router</h1>
          <br />
          <p>Mahasiswa D4 Pengembangan Web</p>
        </div>
      </main>
    </>
  )
}
