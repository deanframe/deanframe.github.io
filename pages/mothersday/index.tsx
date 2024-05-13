import Head from 'next/head'
import Image from 'next/image'

export default function MothersDay() {
  return <>
  <Head>
    <title>Mother{'\''}s Day</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
  <main>
    
    <h1>Happy Mother{'\''}s Day!</h1>
    <Image id='mother' src={'/mothersday.jpg'} alt='mommy and me' width={252} height={189}/>
    <div style={{maxWidth: '250px', padding: '8px'}}>
    <p>
      Hi Mom! Happy Mother{'\''}s Day!
    </p>
    <p>
      In an epic and fearless break of tradition, this will serve as a virtual card. And here are some virtual flowers 🌸🌼💐
    </p>
    <p>
      As I continue onto the next phase of my life, your support has continued to mean so much to me. It hasn{'\''}t been easy to adapt
      to a full-time job in a new city, but you have always been there to listen to my complaints and stories. I{'\''}m sure listening to
      me complain about whatever happened at work that week might get annoying, but you{'\''}re always there to listen and console me as 
      I get used to the fact that this will be the next few decades of my life, haha. We have already had so much fun together this year - 
      from laughing at drunk people at Michael{'\''}s wedding, to hanging out under the sun in Indian Wells, and eating some awesome Filipino
      food in LA. I always love spending time with you - and I appreciate how you do your bet to turn down the Mom-isms - I can read what{'\''}s
      on the menu! It{'\''}s been so interesting to hear your stories of your 20{'\''}s and compare them to the things I{'\''}m doing now. I{'\''}m so excited
      for the rest of the year for us - It{'\''}ll be fun to visit Matthew down in Davis, and celebrate our birthdays in Alaska!
    </p>
    <p>I am so so so happy I get to call you my mom - you probably literally are the best Mom in the world. And now you get to bear the fruit
      of all of those tiring years raising us - we{'\''}ve moved away from home, lol. But I always know I can come back home whenever, to see my
      number one supporter who has always given up everything for me and Matthew.
    </p>
    <p>
      I love you! -Dean
    </p>
    </div>

  </main>
  </>
}