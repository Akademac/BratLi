import { Link } from "react-router-dom";  

const ViewDetailsBtn = ({id}) => {
  return<Link to={`/BratLi/product/${id}`}><button className="viewDetails__btn">Pogledaj Detalje!</button></Link>
}

export default ViewDetailsBtn;