import MiniNav from './MiniNav';
import { showMiniNav } from '../redux/actions';
import { useSelector, useDispatch } from 'react-redux';
const MiniNavBtn = () => {
  const state = useSelector(state => state.miniNavR);
  const dispatch = useDispatch();

  const handelMiniNavVisibility = () => {
    dispatch(showMiniNav(!state));
  }

  return (
    <div className="navMini__btn">
      <i className={!state ? "fas fa-bars" : "fas fa-times"} onClick={handelMiniNavVisibility}></i>
      <MiniNav vis={state} />
    </div>
  )
}

export default MiniNavBtn;