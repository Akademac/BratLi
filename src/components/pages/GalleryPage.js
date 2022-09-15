import '../../styles/gallery.css';
import { useState, useEffect } from 'react';

const img1 = window.location.origin + "/assets/Images/Gallery/gallery_img_1.webp";
const img2 = window.location.origin + "/assets/Images/Gallery/gallery_img_2.webp";
const img3 = window.location.origin + "/assets/Images/Gallery/gallery_img_3.webp";
const img4 = window.location.origin + "/assets/Images/Gallery/gallery_img_4.webp";
const img5 = window.location.origin + "/assets/Images/Gallery/gallery_img_5.webp";
const img6 = window.location.origin + "/assets/Images/Gallery/gallery_img_6.webp";
const img7 = window.location.origin + "/assets/Images/Gallery/gallery_img_7.webp";
const img8 = window.location.origin + "/assets/Images/Gallery/gallery_img_8.webp";
const img9 = window.location.origin + "/assets/Images/Gallery/gallery_img_9.webp";
const img10 = window.location.origin + "/assets/Images/Gallery/gallery_img_10.webp";



const GalleryPage = () => {
  window.scrollTo(0, 0);
  let [galeryMl, setGalleryMl] = useState(0);
  let [arrowRight, setArrowRight] = useState(false);
  let [arrowLeft, setArrowLeft] = useState(true);


  const handleGallery = (e) => {
    if (e === 'left') {
      setGalleryMl(galeryMl - 100);
    }
    else if (e === 'right') {
      setGalleryMl(galeryMl + 100);
    }
  }

  useEffect(() => {
    if (galeryMl < 0) {
      setArrowRight(true)
    }
    else {
      setArrowRight(false)
    }
    if (galeryMl < -800) {
      setArrowLeft(false)
    }
    else {
      setArrowLeft(true)
    }
  }, [galeryMl])

  return (
    <div className="gallery__container">
      <div className='over_div'>
        <i className="far fa-arrow-alt-circle-left left_arrow" onClick={() => handleGallery('left')} style={{ display: arrowLeft ? 'inline' : 'none' }}></i>
        <i className="far fa-arrow-alt-circle-right right_arrow" onClick={() => handleGallery('right')} style={{ display: arrowRight ? 'inline' : 'none' }}></i>
        <span className='go_back' >
          <i className="fas fa-caret-left" onClick={() => { window.open('/', '_self') }} style={{cursor: 'pointer', zIndex: '2000'}}></i>
        </span>
      </div>
      <div className='container' style={{ left: `${galeryMl}vw` }}>
        <div className='imgs_div'>
          <img src={img1} alt="Slika masni" className='imgs' />
        </div>
        <div className='imgs_div'>
          <img src={img2} alt="Slika masni" className='imgs' />
        </div>
        <div className='imgs_div'>
          <img src={img3} alt="Slika masni" className='imgs' />
        </div>
        <div className='imgs_div'>
          <img src={img4} alt="Slika masni" className='imgs' />
        </div>
        <div className='imgs_div'>
          <img src={img5} alt="Slika masni" className='imgs' />
        </div>
        <div className='imgs_div'>
          <img src={img6} alt="Slika masni" className='imgs' />
        </div>
        <div className='imgs_div'>
          <img src={img7} alt="Slika masni" className='imgs' />
        </div>
        <div className='imgs_div'>
          <img src={img8} alt="Slika masni" className='imgs' />
        </div>
        <div className='imgs_div'>
          <img src={img9} alt="Slika masni" className='imgs' />
        </div>
        <div className='imgs_div'>
          <img src={img10} alt="Slika masni" className='imgs' />
        </div>
      </div>
    </div>
  )
}


export default GalleryPage;

// 