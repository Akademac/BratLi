import { useParams } from "react-router-dom";
import { getData } from "../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "../../styles/products.css";
import Card from "../Card";
import PageAnim from "../PageAnim";
import Preloader from "../Preloader";


const Products = () => {
  window.scrollTo(0, 0);
  let { forWhom } = useParams();
  let [sortedData, setSortData] = useState('');

  let [specData, setSpecData] = useState([]);
  let [showSortDiv, setShowSortDiv] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.gettingAllDataR);
  let [allData, setAllData] = useState([]);

  useEffect(() => {
    dispatch(getData());
  }, []);

  useEffect(() => {
    if (state && state.data) {
      setAllData(state.data);
    }
  }, [state]);

  let jsxElement;

  useEffect(() => {
    if (allData) {
      var x = allData.filter((e) => e.for === forWhom);
      var y;
      if(sortedData === '') {
        y = x        
      }
      else if (sortedData === 'priceRising') {
        y = x.sort((a, b) => a.price-b.price)
      }
      else if (sortedData === 'priceFalling') {
        y = x.sort((a, b) => b.price-a.price)
      }
      else if (sortedData === 'popularity') {
        y = x.sort((a, b) => b.popul-a.popul)
      }    
      setSpecData(y);
    }
  }, [allData, forWhom, sortedData]);

  const handleSortingData = (e) => {
    setSortData(e)
  }

  if (state.fetching) {
    jsxElement = (
      <Preloader />
    );
  } else {
    jsxElement = specData.map((e, index) => {
      return (
        <Card
          key={index}
          id={e.id}
          name={e.name}
          price={e.price}
          material={e.material}
          box={e.box}
          popul={e.popul}
          qty={e.qty}
          forWho={e.for}
          img={e.img}
          instock={e.instock}
        />
      );
    });
  }

  const habdleShowDiv = () => {
    setShowSortDiv(!showSortDiv);
  };

  return (
    <div className="products__wrapper">
      <PageAnim />
      <div className="productsFilter__div">
        <span>
          Trenutno {specData.length < 1 ? " ... " : specData.length} proizvoda
          na stanju.
        </span>
        <span className="sort__span">
          <p onClick={habdleShowDiv}>Sortiraj po:</p>
          <div
            onClick={habdleShowDiv}
            className="sort__div"
            style={{ display: !showSortDiv ? "none" : "block" }}
          >
            <p onClick={() => handleSortingData('priceRising')}>- cena rastuca</p>
            <p onClick={() => handleSortingData('priceFalling')}>- cena opadajuca</p>
            <p onClick={() => handleSortingData('popularity')}>- prvo popularne</p>
          </div>
        </span>
      </div>
      <div className="products__container">{jsxElement}</div>
    </div>
  );
};

export default Products;
