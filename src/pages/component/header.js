import Nav from './nav.js'
import style from '../../styles/header.module.css'

export default function Header() {
    return(
       
        <div className={style.HeaderDiv}>
             <Nav />
        </div>
    )
}
