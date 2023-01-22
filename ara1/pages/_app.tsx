import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {
  return <div>
    <div>
      <Link href={'/'} className=''>
      </Link>
    </div>
    <Component {...pageProps} />
  </div>
}
