import style from './header.module.scss';
import NavBar from './navbar/NavBar';
import TopPanel from './top-panel/TopPanel';
import SpecialOffer from './special-offer/SpecialOffer';

const Header = () => {
 
  return (
    <header className={style.header}>
            <TopPanel />
            <NavBar />
            <SpecialOffer />
    </header>
  )
}

export default Header;
