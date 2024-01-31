import React, { useState } from 'react';
import Link from 'next/link';
import style from '../../styles/cardlist.module.css';
import Nav from './nav';

function Card(props) {
  return (
    <article className={style.card}>
      <img src={props.img} alt={props.name} />
      <h2>{props.name}</h2>
      <p>{props.story}</p>
    </article>
  );
}

export default function CardList() {
  const [visibleCount, setVisibleCount] = useState(4);

  const hardcodedItems = [

    {
      name: '口裂け女',
      img: '/口裂け女.png',
      story: "大きなマスクをした不気味な女性が夕方ごろ子供に「私、綺麗？」と訊ねてくる。「きれいです」と答えると「……これでもきれい……？」と言いながらマスクを外す。その口は耳元まで大きく裂けていてこの世の者とは思えない。もし「きれいじゃない」と答えるとその場で包丁や大きな鋏で斬り殺されるという。いくつも伝説の中にポマードやべっこう飴が苦手とされているが真相は不明。"
    },
    {
      name: '両面宿儺',
      img: '/両面宿儺.png',
      story: "高山市丹生川町に伝わる、飛騨の豪族「両面宿儺」。日本書紀によると、両面宿儺は一つの胴体に二つの顔があり、手足が各四本ある怪物として恐れられ、大和朝廷に背いたとして難波根子武振熊（ナニワノネコタケフルクマ）に討伐されたされる。一方、飛騨地方では、両面宿儺は武勇にすぐれ、神祭の司祭者であり、農耕の指導者でもあったと言われ、地域を中央集権から守った英雄であったと語り継がれている。"
      
    },
    {
      name:'飽きた',
      img:'/飽きた.png',
      story:"「パラレルワールドに行ける方法!これをする人は今までの人生に飽きた人や、刺激が欲しい人におすすめです。５㎝×５㎝の正方形の紙にできるだけ大きく六芒星を書き、その中に「飽きた」と書く。その紙を持って寝て、次の日に紙が無くなっていたらパラレルワールド、すなわち異世界にいけるって話だよ！赤字で書けば効果倍増だぜ。ただもう帰ってこれないけどな」by.ある掲示板の書き込み"
    },
    {
      name:'八尺様',
      img:'/八尺様.png',
      story:"八尺様は、日本の都市伝説で、身長約2.4メートルの白い服の女性の幽霊。夜、彼女は「ポポポポポ」と低い笑い声で現れ、目撃者に不幸をもたらすと言われている。ある夜、若者が故郷の村を訪れた際、八尺様に遭遇。村人は彼に絶対に振り返らないよう警告し、彼は怖れを感じながらも無事にその場を逃れた。八尺様は怨念や呪いを象徴し、見る者に恐怖を植え付ける存在とされている。"
    },
    {
      name:'伝説のハッカー',
      img:'/伝説のハッカー.png' ,
      story:"この学校には伝説のハッカーがいると噂される生徒がいた。だが、その正体は実は学生ではなく教員だった。夜ごとに世界のサイバー犯罪に挑む彼女は、昼間は大人しい地味で目立たない普通の数学教師として振る舞う。彼女の二重生活は誰にも知られず、生徒たちは彼女の授業で学んだ数学が、実は世界を救うコードの秘密を隠しているとは夢にも思わないのである。"
    },
    {
      name:'多様性の使い方',
      img:'/多様性.png',
      
    },
    {
      name:'清姫' ,
      img:'/清姫.png',
      
    },
    {
      name:'交差点の幽霊' ,
      img:'/交差点の幽霊.png',
      
    },
    {
      name:'古代核戦争' ,
      img:'/古代核戦争.png',
      
    },
    {
      name:'玉藻前' ,
      img:'/玉藻前.png',
      
    },
    {
      name:'鬼' ,
      img:'/鬼.png',
      
    },
    {
      name:'ろくろっ首' ,
      img:'/ろくろっ首.png',
      
    },
    {
      name:'メリーさん' ,
      img:'/メリーさん.png',
      
    },
    {
      name:'ブラッディーメアリー' ,
      img:'/メアリー.png',
      
    },
    {
      name:'ぬらりひょん' ,
      img:'/ぬらりひょん.png',
      
    },
    {
      name:'てけてけ' ,
      img:'/てけてけ.png',
      
    },
    {
      name:'カシマさま' ,
      img:'/カシマさま.png',
      
    },
    {
      name:'ブルガリアの預言者' ,
      img:'/babaganda.png',
      
    },
    {
      name:'エレベーターゲーム' ,
      img:'/elevator.png',
      
    },
    {
      name:'インドの天才占星術師' ,
      img:'/anando.png',
      
    },
    {
      name:'きさらぎ駅' ,
      img:'/kisaragieki.png',
      
    },
   

   
  ];

  const showMoreItems = () => {
    setVisibleCount(prevCount => prevCount + 4);
  };

  return (
    <>
      <Nav />
      <div className={style.cardList}>
        {hardcodedItems.slice(0, visibleCount).map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>

      {visibleCount < hardcodedItems.length && (
        <button onClick={showMoreItems} className={style.button}>もっと見る</button>
      )}

      <Link href="/">
        <button className={style.home}>HOME</button>
      </Link>
      <h6 className={style.fot}>© 2023 GOLEM WORKS</h6>
    </>
  );
}
