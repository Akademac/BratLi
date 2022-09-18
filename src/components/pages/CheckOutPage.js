import {useSelector} from 'react-redux';

const CheckOutPage = () => {
  window.scrollTo(0, 0);
  const cartData = useSelector(state => state.addToCartR);
  const allData = useSelector(state => state.gettingAllDataR);
  let buyingArr = [];
  let totalPriceArr = [];
  let totalPrice;
  if (allData && allData.data) {
    allData.data.forEach(e => {
      cartData.forEach(ee => {
        if (e.id === ee) {
          buyingArr.push(e);
        }
      })
    })
  }

  buyingArr.forEach(e => {
    totalPriceArr.push(e.price);
  })

  if(totalPriceArr.length !== 0) {
    totalPrice = totalPriceArr.reduce((a, b) => parseInt(a) + parseInt(b));
  }
  else {
    totalPrice = 0
  }

  
  let priceWithPercent;

  priceWithPercent = totalPrice - totalPrice/10;

  return (
    <div className="checkout__wrapper">
      <div className="checkout__div">
        <div className="checkout__details">
          <p>Popunite formular.</p>
          <span>* obavezna polja!</span>
          <hr />
        </div>
        <form action="">
          <div className="checkedoutForm__div">
            <span>*</span>
            <input type="text" name="first_name" placeholder="Ime" required />
          </div>
          <div className="checkedoutForm__div">
            <span>*</span>
            <input
              type="text"
              name="last_name"
              placeholder="Prezime"
              required
            />
          </div>
          <div className="checkedoutForm__div">
            <span>*</span>
            <input
              type="text"
              name="address"
              placeholder="Grad, Ulica, Broj"
              required
            />
          </div>
          <div className="checkedoutForm__div">
            <span>*</span>
            <input
              type="text"
              name="br_tel"
              placeholder="Broj telefona"
              required
            />
          </div>
          <div className="checkedoutForm__div">
            <span>*</span>
            <input type="text" name="email" placeholder="Email" required />
          </div>
          <div className="pay__method">
            <span>placenje pouzecem</span>
            <input type="checkbox"  checked='checked' readOnly/>
            <hr />
          </div>
          <div className="checkout__total">
            <span>Ukupna cena za placanje <b>{buyingArr.length > 2 ? priceWithPercent : totalPrice}.00 RSD</b> + postarina.</span>
          </div>
          <button type="submit" className="finalBuying__btn">Kupi!</button>
        </form>
      </div>
    </div>
  );
};

export default CheckOutPage;
