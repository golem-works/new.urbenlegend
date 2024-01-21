import style from '../../styles/titlefooter.module.css';


export default function TitleFooter() {
  return (
    <div className="copy">
    <footer className={style.titleFooter}>
      <img src="golemtitle.png" alt="Golem Title" width={500} height={30} />
      <ul className={style.titleFooterList}>
        <li className={style.creatorInfo}>製作者: 問い合わせ先</li>
        <li>
          <a href="https://golem-works.com/">GOLEM WORKS</a>
        </li>
        <li>WEBデザイン/ホームページ制作/アパレル</li>
        <li>
          <a href="https://golem-works.com/">https://golem-works.com/</a>
        </li>
      </ul>
      <p>© 2023 GOLEM WORKS</p>
    </footer>
        
    </div>
  );
}