import '../../styles/home.css';
import Contact from '../Contact';
import Gallery from '../Gallery';
import MainDiv from "../MainDiv";
import Sliders from '../Sliders';

const Home =() => {
  return (
    <div>
      <MainDiv />
      <Sliders />
      <Gallery />
      <Contact />
    </div>
  )
}

export default Home;