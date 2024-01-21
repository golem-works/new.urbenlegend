import Head from 'next/head';
import Header from './component/header';
import TitleFooter from './component/titlefooter';
import Link from 'next/link';


export default function Home() {

  return (
    <>

    <Head>
      <title>Urben Legend Card</title>
      <link rel="icon" href="/icon.png" />
      <link rel="apple-touch-icon" href="/apple-touch-icon192.png" />
      <link rel="manifest" href="/manifest.json" />
    </Head>
    

    <div className="mainTop">

      <Header />

      <h1 className='titleName'>
        Urben <span>L</span>egend Card
        </h1>
        
      <div className="videoContainer">
        <video className='top' autoPlay muted>
          <source src="/都市伝説の館.mp4" type="video/mp4" />
        </video>

        <video className='mobile' autoPlay muted>
          <source src="/mobiletop.mp4" type="video/mp4" />
        </video>

        <Link href="/component/card">
        <button className="main">占う</button>
        </Link>


        
      </div>

      <figure>
    <a href="https://golemworks.buyshop.jp/">
        <img src ='/1.png' alt="GOLEMWORKSオンラインショップ" className="cm" />
    </a>
    <p className="cmText">- オリジナルグッズ販売中 -</p>
    </figure>

      <TitleFooter />

    </div>
  </>
  );
}
