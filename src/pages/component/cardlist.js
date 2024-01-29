import Link from 'next/link';
import React from 'react';
import style from '../../styles/cardlist.module.css';
import Nav from './nav';





// export default function Cardlist() {
//   return (
//     <>
//       <Nav />
//       <div className={style.crdelist}>
//         <ul>
//           <li>
//           <Link href='/口裂け女.png'>
//             <span className={style.myImg}>001 口裂け女</span>
//           </Link>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }

function Card(props) {
  return (
    <article className={style.card}>
      <h2>{props.name}</h2>
      <img src={props.img} alt={props.name} />
    </article>
  );
}

// カードのリストをレンダリングするメインコンポーネントね

export default function CardList({ items = [] }) { // デフォルト値として空の配列を設定
  return (
    <>
      <Nav />
      <div className={style.cardList}>
       <Card name='口裂け女'  img='/口裂け女.png' />
       <Card name='両面宿儺'  img='/両面宿儺.png' />
       <Card name='飽きた'  img='/飽きた.png' />
       <Card name='八尺様'  img='/八尺様.png' />
       <Card name='伝説のハッカー'  img='/伝説のハッカー.png' />
       <Card name='多様性'  img='/多様性.png' />
       <Card name='清姫'  img='/清姫.png' />
       <Card name='交差点の幽霊'  img='/交差点の幽霊.png' />
       <Card name='古代核戦争'  img='/古代核戦争.png' />
       <Card name='玉藻前'  img='/玉藻前.png' />
       <Card name='鬼'  img='/鬼.png' />
       <Card name='ろくろっ首'  img='/ろくろっ首.png' />
       <Card name='メリーさん'  img='/メリーさん.png' />
       <Card name='ブラッディーメアリー'  img='/メアリー.png' />
       <Card name='ぬらりひょん'  img='/ぬらりひょん.png' />
       <Card name='てけてけ'  img='/てけてけ.png' />
       <Card name='カシマさま'  img='/カシマさま.png' />
       <Card name='ブルガリアの預言者'  img='/babaganda.png' />
       <Card name='エレベーターゲーム'  img='/elevator.png' />
       <Card name='インドの天才占星術師'  img='/anando.png' />
      </div>
      <Link href="/">
        <button className={style.home}>HOME</button>
        </Link>
      <h6 className={style.fot}>© 2023 GOLEM WORKS</h6>
      
    </>
  );
}
