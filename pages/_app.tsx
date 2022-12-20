import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Questrial } from '@next/font/google'
import '../styles/globals.css'

const questrial = Questrial({ subsets: ['latin'], weight: '400' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={questrial.className}>
      <Component {...pageProps} />
    </main>
  )
}
