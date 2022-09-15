import "../styles/slider.css";
import SliderCard from "./SliderCard";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const MESlider = ({ allData }) => {

  const [width, setWidth] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const carousel = useRef();

  const carouselWrapper = useRef();

  let meArr = [];
  let jsxElement;

  if (allData) {
    let x;
    let y;
    allData.forEach(e => {
      x = allData.filter(e => e.price >= 700)
      y = x.sort((a, b) => b.price - a.price);
    })
    if (x) {
      meArr.push(...y)
    }
  }


  useEffect(() => {
    if (allData) {
      setSliderWidth(meArr.length * 512)
      setWidth(meArr.length * 512 - carouselWrapper.current.offsetWidth)
    }
    if(window.innerWidth < 500) {
      setSliderWidth(meArr.length * 400)
      setWidth(meArr.length * 400 - carouselWrapper.current.offsetWidth)
    }
    if(window.innerWidth < 380) {
      setSliderWidth(meArr.length * 350)
      setWidth(meArr.length * 350 - carouselWrapper.current.offsetWidth)
    }
  }, [allData]);

  jsxElement = meArr.map((e, index) => {
    return <SliderCard key={index} name={e.name} price={e.price} material={e.material} box={e.box} popul={e.popul} qty={e.qty} forWho={e.forWho} img={e.img} instock={e.instock} id={e.id} />
  });

  let jsxSkeleton = <><Skeleton className="slider__skeleton"/><Skeleton className="slider__skeleton"/><Skeleton className="slider__skeleton"/></>

  if (window.innerWidth < 500) {
    jsxSkeleton = <><Skeleton className="slider__skeleton"/></>
  }

  return (
    <motion.div className="slider__container" ref={carouselWrapper}>
      <h3>Najskuplji Proizvodi</h3>
      {meArr.length !== 0 ? <motion.div ref={carousel} className="slider__div" style={{ width: sliderWidth + 'px' }} drag="x" dragConstraints={{ right: 0, left: -width }} >
        {jsxElement}

      </motion.div> : <div className="skeleton__div">{jsxSkeleton}</div>}

    </motion.div>
  );
};

export default MESlider;