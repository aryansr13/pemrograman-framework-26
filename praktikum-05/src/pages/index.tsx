import {Inter} from 'next/font/google'
import styles from '@/styles/Home.module.css'
// import Navbar from '@/components/layouts/navbar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <head>
        <title>Praktikum Next.js Pages Router</title>
      </head>
      <div className={styles.center}>
        <img src="/programming.png" width={300} alt="landing page" />
        <h1>Praktikum Next.js Pages Router</h1> <br />
        <p> Aryan Saputra Rahmad Mahasiswa D4 Pengembangan Web</p>
        <p>Ini adalah halaman landing page</p>
      </div>
    </div>
  )
}