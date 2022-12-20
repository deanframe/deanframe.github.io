import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dean Frame</title>
        <meta name="description" content="Dean Frame's personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main>
        <div className='content-container'>
          <div className='title'>
            Dean Frame
          </div>
          <div>
            honors cs @ northeastern
          </div>
          <div>
            incoming swe @ <Link target='_blank' href='https://www.stripe.com'>stripe</Link>
          </div>
          <div>
            <Link href='/Resume.pdf' download>resume</Link>
            {' | '}
            <Link target='_blank' href='https://www.linkedin.com/in/dean-frame'>linkedin</Link>
            {' | '}
            <Link target='_blank' href='https://www.github.com/deanframe'>github</Link>
            {' | '}
            <Link href='mailto:dacframe@gmail.com'>email</Link>
          </div>
        </div>
      </main>
    </>
  )
}
