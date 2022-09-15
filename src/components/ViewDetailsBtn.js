import { Link } from "react-router-dom";  

const ViewDetailsBtn = ({name, price, material, box, popul, qty, forWho, img, instock, id}) => {
  return<Link to={`/product/${id}`}><button className="viewDetails__btn">Pogledaj Detalje!</button></Link>
}

export default ViewDetailsBtn;