const loading = window.location.origin + "/assets/Images/loading.gif";

const Preloader = ({mt}) => {
  return (
<div className="laodingD_div" style={{marginTop: mt}}>
        <img src={loading} alt="Loading..." />
      </div>
  )
}

export default Preloader;