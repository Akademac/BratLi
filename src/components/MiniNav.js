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
        <li><Link to='/' >Naslovna</Link></li>
        <li className="dropdown">
            <ul>
              <Link to='/products/men'><li>Za Muškarce</li></Link>
              <Link to='/products/women'><li>Za Dame</li></Link>
              <Link to='/products/kids'><li>Za Decu</li></Link>
              <Link to='/products/pets'><li>Za Ljubimce</li></Link>
            </ul>
        </li>
        <li><HashLink to='/#gallery' smooth >Galerija</HashLink></li>
        <li><HashLink to='/#contact' smooth >Kontakt</HashLink></li>
        <hr className="miniNav__hr"/>
        <li className="shoppingCart__btn"><Link to='/cart'><i className="fa fa-shopping-cart" ></i><b>{CIstate.length}</b></Link></li>
      </ul>
    </div>
  )
}

export default MiniNav;