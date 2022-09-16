import AddToCartBtn from "./AddToCartBtn";
import ViewDetailsBtn from "./ViewDetailsBtn";
import { motion } from "framer-motion";

const SliderCard = ({ name, price, material, box, popul, qty, forWho, img, instock, id }) => {
  let jsxElement;
  let imgs = '/BratLi' + img;

  jsxElement = (<>
    <div className="mpSlider_cardImg__div">
      <img src={imgs} alt="name" />
    </div>
    <div className="mpSlide_card__details">
      <h3>{name}</h3>
      <span>{price}.00 RSD</span>
      <span className="product__id_slider">#{id}</span>
    </div>
    <div className="mp_card__btns">
      <AddToCartBtn id={id} />
      <ViewDetailsBtn name={name} price={price} material={material} box={box} popul={popul} qty={qty} forWho={forWho} img={img} instock={instock} id={id} />
    </div>
  </>
  )
  return (
    <motion.div className="mpSlider__card">
      {jsxElement}
    </motion.div>

  )
}

export default SliderCard;