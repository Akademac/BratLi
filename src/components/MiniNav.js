import { Link} from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { showMiniNav } from '../redux/actions';
import { useSelector, useDispatch } from 'react-redux'; 

const MiniNav = ({vis}) => {
  const SMNstate = useSelector(state => state.miniNavR);
  const CIstate = useSelector(state => state.addToCartR);

  const dispatch = useDispatch();

  const handelMiniNavVisibility = () => {
    dispatch(showMiniNav(!SMNstate));
  }

  return (
    <div className={vis ? 'mini__nav mini__nav_active' : 'mini__nav'} onClick={handelMiniNavVisibility} >
      <ul className="miniNav__ul">
        <li><Link to='/BratLi' >Naslovna</Link></li>
        <li className="dropdown">
            <ul>
              <Link to='/BratLi/products/men'><li>Za Muškarce</li></Link>
              <Link to='/BratLi/products/women'><li>Za Dame</li></Link>
              <Link to='/BratLi/products/kids'><li>Za Decu</li></Link>
              <Link to='/BratLi/products/pets'><li>Za Ljubimce</li></Link>
            </ul>
        </li>
        <li><HashLink to='/BratLi/#gallery' smooth >Galerija</HashLink></li>
        <li><HashLink to='/BratLi/#contact' smooth >Kontakt</HashLink></li>
        <hr className="miniNav__hr"/>
        <li className="shoppingCart__btn"><Link to='/BratLi/cart'><i className="fa fa-shopping-cart" ></i><b>{CIstate.length}</b></Link></li>
      </ul>
    </div>
  )
}

export default MiniNav;