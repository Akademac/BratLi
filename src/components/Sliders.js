import MPSlider from "./MPSlider";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../redux/actions";
import { useEffect, useState } from "react";
import MESlider from "./MESlider";
import MNESlider from "./MNESlider";
const Sliders = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.gettingAllDataR);
  const [allData, setAllData] = useState();

  useEffect(() => {
    dispatch(getData());
  }, []);

  useEffect(() => {
    if (state && state.data) {
      setAllData(state.data);
    }
  }, [state]);

  return (
    <div className="sliders__wrapper">
      <MPSlider allData={allData} />
      <MESlider allData={allData} />
      <MNESlider allData={allData} />
    </div>
  )
}

export default Sliders;