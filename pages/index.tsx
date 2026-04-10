import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dean Frame</title>
        <meta name="description" content="Personal Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <div className='content-container'>
          <div className='name'>
            Dean Frame
          </div>
          <div>
            Software Engineer @ <Link target='_blank' href='https://www.stripe.com'>Stripe</Link>
          </div>
          <div>
            Right now I'm working on building API keys for AI agents, which gate money movement actions behind configurable human approval rules.
          </div>
          <div>
            Check out <Link target='_blank' href='https://www.hackbeanpot.com'>HackBeanpot</Link>, a Boston-area hackathon I helped organize while in school!</div>
          <div>
            <Link target='_blank' href='/Resume.pdf' download>Resume (old)</Link>
            {' | '}
            <Link target='_blank' href='https://www.linkedin.com/in/dean-frame'>LinkedIn</Link>
            {' | '}
            <Link href='mailto:dacframe@gmail.com'>Email me!</Link>
          </div>
        </div>
      </main>
    </>
  )
}
