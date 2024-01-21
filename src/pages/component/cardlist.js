import Link from 'next/link';
import React from 'react';
import style from '../../styles/cardlist.module.css';
import Nav from './nav';

export default function Cardlist() {
  return (
    <>
      <Nav />
      <div className={style.crdelist}>
        <ul>
          <li>
          <Link href='/口裂け女.png'>
            <span className={style.myImg}>001 口裂け女</span>
          </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
