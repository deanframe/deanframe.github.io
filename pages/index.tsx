import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

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
          <Image id='headshot' src={'/headshot.jpg'} alt='my face!' width={200} height={200} />
          <div className='title'>
            Dean Frame
          </div>
          <div>
            incoming software engineer @ <Link className='stripe' target='_blank' href='https://www.stripe.com'>stripe</Link>
          </div>
          <div>
            previous experience:
            <ul>
              <li>- intern @ <Link className='stripe' target='_blank' href='https://www.stripe.com'>stripe</Link> - typescript, flow js, react, graphql, grpc, ruby, java</li>
              <li>- co-op @ <Link className='notability' target='_blank' href='https://www.notability.com'>ginger labs</Link> - typescript, react, next.js, graphql, node.js, postgres</li>
              <li>- co-op @ <Link className='wayfair' target='_blank' href='https://www.wayfair.com'>wayfair</Link> - javascript, react, php, sql server</li>
            </ul>
          </div>
          <div>
            check out <Link className='hackbeanpot' target='_blank' href='https://www.hackbeanpot.com'>hackbeanpot</Link>, a Boston-area hackathon I helped organize while in school!</div>
          <div>
            <Link className='link' target='_blank' href='/Resume.pdf' download>resume</Link>
            {' | '}
            <Link className='link' target='_blank' href='https://www.linkedin.com/in/dean-frame'>linkedin</Link>
            {' | '}
            <Link className='link' target='_blank' href='https://www.github.com/deanframe'>github</Link>
            {' | '}
            <Link className='link' href='mailto:dacframe@gmail.com'>email</Link>
          </div>
        </div>
      </main>
    </>
  )
}
