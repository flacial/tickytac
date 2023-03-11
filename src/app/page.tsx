import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1 className={inter.className}>tickytac is under development...</h1>
    </main>
  )
}
