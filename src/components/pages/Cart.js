import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from '../../redux/actions/index';
import PageAnim from '../PageAnim';
import { Link } from "react-router-dom";
import '../../styles/cart.css';
import KeepShoping from "../KeepShopping";
const deleteBtn = window.location.origin + '/assets/Icons/deleteBtn.png'


const Cart = () => {
  window.scrollTo(0, 0);
  const dispatch = useDispatch();
  const cartData = useSelector(state => state.addToCartR);
  const allData = useSelector(state => state.gettingAllDataR);
  let cartArr = [];
  let totalArr = [];
  let jsxCardElement;

  if (allData && allData.data) {
    allData.data.forEach(e => {
      cartData.forEach(ee => {
        if (e.id === ee) {
          cartArr.push(e);
        }
      })
    })
  }

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  }


  if(cartArr.length === 0) {
    jsxCardElement = (
      <div>
      <p className="empty__cart">Vaša korpa je prazna!</p>
      <KeepShoping singleProduct={'/'} />
      </div>
    )
  }
  else {
    jsxCardElement = cartArr.map((e, index) => {
      return (
        <div key={index} className='cart__card'>
          <div className="card__delete">
            <img src={deleteBtn} alt="Delete" onClick={() => handleDelete(e.id)} />
  
          </div>
          <div className="cartCard__imgDv">
            <img src={e.img} alt={e.name} />
          </div>
          <div className="cartCard__details">
            {e.price}.00 RSD
          </div>
        </div>
      )
    })
  }

  cartArr.map(e => {
    totalArr.push(e.price);
  })

  let totalPrice;

  if(totalArr.length !== 0) {
    totalPrice = totalArr.reduce((a, b) => parseInt(a) + parseInt(b));
  }
  else {
    totalPrice = 0
  }

  let priceWithPercent;

    priceWithPercent = totalPrice - totalPrice/10;




  return (
    <div className="cart__wrapper">
      <PageAnim />
      <div className="cards__div">
        {jsxCardElement}
      </div>
      <div className="summary__div">
        <div className="product__num">Broj proizvoda: {cartArr.length}</div>
        <div className="totalPrice__num">Ukupna cena: <b>{totalPrice}.00 RSD</b></div>
        <div className="discount__div">
          <p>Ukoliko naručite 3 ili više proizvoda ostvarićete popust od 10%.</p>
          <p>Popust na količinu: {cartArr.length >= 3 ? <b>ostvaren</b>: <b>neostvaren</b>}.</p>
        </div>
        <div className="priceWithPercent">Cena nakon popusta: <b>{cartArr.length > 2 ? priceWithPercent : totalPrice}.00 RSD</b></div>
        {cartArr.length > 0 && <Link to='/checkout'><button className="buying__btn">Kupite!</button></Link>} 
        
      </div>
    </div>
  )
}

export default Cart;