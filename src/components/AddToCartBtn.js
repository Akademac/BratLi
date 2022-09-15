import { addToCart } from '../redux/actions/index'
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { isInCart } from '../redux/reducers/addToCart';


const AddToCartBtn = ({ id }) => {

  const dispatch = useDispatch();

  const state = useSelector(state => state.addToCartR);

  const addId = () => {
    dispatch(addToCart(id));
  }


  return (
    <button onClick={addId} className="addToCart__btn">{isInCart(state, id) ? 'U korpi!' : 'Ubaci u korpu!'}</button>
  )
}

export default AddToCartBtn;