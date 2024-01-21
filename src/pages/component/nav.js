import React, { useState } from 'react';
import Link from 'next/link';
import style from '../../styles/nav.module.css';

export default function Nav() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const toggleNav = () => {
    setNavIsOpen(!navIsOpen);
  };

  return (
    <nav className={style.navList}>
      <div className={style.hamburger} onClick={toggleNav}>
        <img src="/menu.png" alt="Menu" style={{ width: 30, height: 30 }} />
      </div>

      <ul className={navIsOpen ? style.navListMobile : style.navListHidden}>
        <li><Link href="/">HOME</Link></li>
        <li><Link href="/component/cardlist">CARD LIST</Link></li>
        <li><Link href="/component/contact">お問合せ</Link></li>
      </ul>
    </nav>
  );
}
