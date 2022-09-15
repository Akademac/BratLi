import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div className="gallery__wrapper"  id='gallery'>
      <Link to='/gallery'>
        <div className="gallery__div">
          <h2>Galerija fotografija</h2>
        </div>
      </Link>
    </div>
  )
}

export default Gallery;