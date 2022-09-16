import "../styles/footer.css";
const logo = window.location.origin + "/BratLi/assets/Logoes/mainLogo_2.png";

const Footer = () => {
  return (
    <div className="footer__wrapper">
      <img src={logo} alt="Logo" />
      <div className="footer__sm">
        <i className=" fab fa-brands fa-facebook"></i>
        <i className="fab fa-brands fa-instagram"></i>
      </div>
      <div className="all__rights">
          <p>@ 2022, WEBELDES, sva prava zadržana...</p>
      </div>
    </div>
  );
};

export default Footer;
