import React, { useState, useEffect, useRef } from 'react';
import style from '../../styles/card.module.css';
import Nav from './nav';
import Link from 'next/link';

const cards = [
  { name: '清姫', image: '/清姫.png' },
  { name: '伝説のハッカー', image: '/伝説のハッカー.png' },
  { name: '八尺様', image: '/八尺様.png' },
  { name: '両面宿儺', image: '/両面宿儺.png' },
  { name: 'ぬらりひょん', image: '/ぬらりひょん.png' },
  { name: 'てけてけ', image: '/てけてけ.png' },
  { name: '口裂け女', image: '/口裂け女.png' },
  { name: '古代核戦争', image: '/古代核戦争.png' },
  { name: 'メリーさん', image: '/メリーさん.png' },
  { name: 'ブラッディーメアリー', image: '/メアリー.png' },
  { name: 'カンカンだら', image: '/kankandara.png' },
  { name: 'かしまさま', image: '/カシマさま.png' },
  { name: 'エレベーターゲーム', image: '/elevator.png' },
  { name: 'きさらぎ駅', image: '/kisaragieki.png' },
  { name: 'ろくろっ首', image: '/ろくろっ首.png' },
  { name: '交差点の幽霊', image: '/交差点の幽霊.png' },
  { name: '鬼', image: '/鬼.png' },
  { name: '飽きた', image: '/飽きた.png' },
  { name: '多様性', image: '/多様性.png' },
  { name: 'インドの占星術師', image: '/anando.png' },
  { name: 'ブルガリアの預言者', image: '/babaganda.png' },
  { name: '玉藻前', image: '/玉藻前.png' },
];

const RandomCard = () => {
  const [randomCard, setRandomCard] = useState(null);
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (isVideoEnded) {
      setRandomCard(cards[Math.floor(Math.random() * cards.length)]);
    }
  }, [isVideoEnded]);

  const handleVideoEnd = () => {
    setIsVideoEnded(true);
  };

  const resetGame = () => {
    setIsVideoEnded(false);
    setRandomCard(null);

    if (videoRef.current) {
      videoRef.current.load();
    }
  };

  return (
    
    <div>
      {!randomCard && !isVideoEnded && (
        <div>
          <video
            ref={videoRef}
            autoPlay
            onEnded={handleVideoEnd}
            src="/占い.mp4"
            type="video/mp4"
            className={style.video}
            style={{ display: 'block',  marginLeft: 'auto', marginRight: 'auto', height: '800px' }}
          />
        </div>
      )}

      {randomCard && (

      <>

        <div className='navWidth'>
          <Nav />
        </div>

        <div className={style.uranai}>
          <h2>{randomCard.name}</h2>
          <img src={randomCard.image} alt={randomCard.name} />

          <Link href="./card" className="rirogu" onClick={resetGame}>
          <p>リトライ</p>
          </Link>
          <h6>© 2023 GOLEM WORKS</h6>
          </div>

      </>


       
      )}
    </div>
  );
};

export default RandomCard;