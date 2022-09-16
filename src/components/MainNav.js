import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useSelector } from 'react-redux/es/exports';

const MainNav = () => {

  const state = useSelector(state => state.addToCartR);

  return (
    <div className="mainNav__wrapper">
      <ul className="mainNav__ul">
        <li><Link to='/BratLi'>Naslovna</Link></li>
        <li className="dropdown">
          <button className="dd__btn">Proizvodi</button>
          <div className="dropdown__menu">
            <ul>
              <Link to='/BratLi/products/men'><li>Za Muškarce</li></Link>
              <Link to='/BratLi/products/women'><li>Za Dame</li></Link>
              <Link to='/BratLi/products/kids'><li>Za Decu</li></Link>
              <Link to='/BratLi/products/pets'><li>Za Ljubimce</li></Link>
            </ul>
          </div>
        </li>
        <li><HashLink to='/BratLi/#gallery' smooth>Galerija</HashLink></li>
        <li><HashLink to='/BratLi/#contact' smooth>Kontakt</HashLink></li>
        <li className="shoppingCart__btn"><Link to='/BratLi/cart'><i className="fa fa-shopping-cart"></i><b>{state.length}</b></Link></li>
      </ul>
    
    </div>
  )
}

export default MainNav;