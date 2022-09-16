import { Link } from "react-router-dom";
import '../styles/cart.css'

const KeepShoping = ({singleProduct}) => {
  return <Link to={`/BratLi${singleProduct}`} ><button className="goBack__btn cart__goBack_button">Nastavi kupovinu!</button></Link>
}


export default KeepShoping;