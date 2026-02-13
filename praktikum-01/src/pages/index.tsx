import Link from 'next/link'

export default function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Praktikum Next.js Pages Router</h1>
      <p>Mahasiswa D4 Pengembangan Web</p>

      <br />

      <Link href="/about">
        <button>Ke Halaman About</button>
      </Link>
    </div>
  )
}
