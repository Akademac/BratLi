import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getData } from "../../redux/actions/index";

import AddToCartBtn from "../AddToCartBtn";
import Preloader from "../Preloader";
import PageAnim from "../PageAnim";
import { Link } from "react-router-dom";
import KeepShoping from "../KeepShopping";


const SingleProduct = () => {
  window.scrollTo(0, 0);
  const { id } = useParams();
  const state = useSelector((state) => state.gettingAllDataR);
  const [singleProduct, setSingleProduct] = useState();
  const dispatch = useDispatch();

  let jsxElement;
  let jsxForWhom;

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  useEffect(() => {
    if (state && !state.fetching) {
      let y = parseInt(id);
      let x = state.data.filter((e) => e.id === y);
      setSingleProduct(...x);
    }
  }, [state, id]);

  if(singleProduct) {

    if(singleProduct.for === 'men') {
      jsxForWhom = 'Muškarcima'
    }
    else if (singleProduct.for === 'women') {
      jsxForWhom = 'Damama'
    }
    else if (singleProduct.for === 'kids') {
      jsxForWhom = 'Dece'
    }
    else if (singleProduct.for === 'pets') {
      jsxForWhom = 'Ljubimcime'
    }
  
  }

  if(!singleProduct) {
    jsxElement = <Preloader mt={"0rem"} />
  } 
  else {
    jsxElement = (
      <div className="sp__div">
      <div className="sp__imgDiv">
         <img src={`/BratLi/${singleProduct.img}`} alt={singleProduct.name} />
      </div>
      <div className="sp__details">
        <h3>{singleProduct.name}</h3>
        <span>{singleProduct.price}.00 RSD</span>
        <span>Materijel: {singleProduct.material}</span>
        <span>Kutija: {singleProduct.box === true ? 'Da' : 'Ne'}</span>
        <span>Namenjeno: {jsxForWhom}</span>
        <span>Na stanju: {singleProduct.instock === true ? 'Da': 'Ne'}</span>
        <span className="product__id product__id__dp">#{singleProduct.id}</span>
      </div>
      <div className="sp__btns">
        <AddToCartBtn id={singleProduct.id}/>
        <KeepShoping singleProduct={`/products/${singleProduct.for}`} />

      </div>
    </div>
    )
  }

  return (
    <div className="singleProduct__wrapper">
        <PageAnim />
        {jsxElement}
    </div>
  );
};

export default SingleProduct;
