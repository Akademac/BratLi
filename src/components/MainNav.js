import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useSelector } from 'react-redux/es/exports';

const MainNav = () => {

  const state = useSelector(state => state.addToCartR);

  return (
    <div className="mainNav__wrapper">
      <ul className="mainNav__ul">
        <li><Link to='/'>Naslovna</Link></li>
        <li className="dropdown">
          <button className="dd__btn">Proizvodi</button>
          <div className="dropdown__menu">
            <ul>
              <Link to='/products/men'><li>Za Muškarce</li></Link>
              <Link to='/products/women'><li>Za Dame</li></Link>
              <Link to='/products/kids'><li>Za Decu</li></Link>
              <Link to='/products/pets'><li>Za Ljubimce</li></Link>
            </ul>
          </div>
        </li>
        <li><HashLink to='/#gallery' smooth>Galerija</HashLink></li>
        <li><HashLink to='/#contact' smooth>Kontakt</HashLink></li>
        <li className="shoppingCart__btn"><Link to='/cart'><i className="fa fa-shopping-cart"></i><b>{state.length}</b></Link></li>
      </ul>
    
    </div>
  )
}

export default MainNav;