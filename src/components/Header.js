import '../styles/header.css';
import MainNav from './MainNav';
import MiniNavBtn from './MiniNavBtn';

const Header = () => {
  return (
    <div className="header__div">
      <MainNav />
      <MiniNavBtn />
    </div>
  )
}


export default Header;