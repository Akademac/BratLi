import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const mainLogo2 = window.location.origin + "/assets/Logoes/mainLogo2.png";
const mainLogo3 = window.location.origin + "/assets/Logoes/mainLogo3.png";
const mainLogo4 = window.location.origin + "/assets/Logoes/mainLogo4.png";

const MainDiv = () => {
  let [logoAnim, setLogoAnim] = useState(mainLogo2);
 
  useEffect(() => {
    setTimeout(() => {
      setLogoAnim(mainLogo3);
    }, 2000);
    setTimeout(() => {
      setLogoAnim(mainLogo2);
    }, 2500);
    setTimeout(() => {
      setLogoAnim(mainLogo4);
    }, 3000);
    setTimeout(() => {
      setLogoAnim(mainLogo2);
    }, 3500);
  }, [])

  return (
    <div className="main__div">
      <img src={logoAnim} alt="Main Logo" />
      <div className="rightDots">
        <ul>
          <li><Link to='/products/men'><i className="fas fa-male"></i></Link></li>
          <li><Link to='/products/women'><i className="fas fa-female"></i></Link></li>
          <li><Link to='/products/kids'><i className="fas fa-child"></i></Link></li>
          <li><Link to='/products/pets'><i className="fas fa-paw"></i></Link></li>
        </ul>
      </div>
    </div>
  )
}

export default MainDiv;