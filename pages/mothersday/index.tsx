import Head from 'next/head'
import Image from 'next/image'

export default function MothersDay() {
  return <>
  <Head>
    <title>Mother{'\''}s Day</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
  <main>
    
    <h1>Happy Mother{'\''}s Day ❤️</h1>
    <Image id='mother' src={'/mother.jpg'} alt='mommy and me' width={252} height={189}/>
    <div style={{maxWidth: '250px', padding: '8px'}}>
    <p>
      Hi Mom! Happy Mother{'\''}s Day! It's another virtual card!
    </p>
    <p>
      {"Now that I've fully settled into the 9 to 5 life, I've been reflecting a bit more on my childhood and how relatively easy it's been for me to make my life my own. Of course, it's because of what you were able to do for me - looking back I took the roof over my head, the food I ate, and the stable and nurturing family all for granted. You worked so hard to come all the way to America and set your life up just so that I could have the upbringing that you dreamed of, and I'm so grateful! Now that we can enjoy the finer things in life like mai tais at the House Without a Key and omakase, it just gives me so much respect for your story and the strength you had when raising twin boys! I hope this Mother's Day you can take the time you need to rest, and maybe even enjoy a cheeky glass of wine. I love you and I'm looking forward to Banff and Yosemite this year!!"}
    </p>
    <p>
    </p>
    <p>
      {'Love, Dean'}
    </p>
    </div>

  </main>
  </>
}