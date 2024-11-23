const Header = ({ dark }) => {
  const email = "hadjmokhtar.oussama@protonmail.com";
  return (
    <div className="orido_tm_header">
      <div className="header_in">
        <div className="logo">
          <a href="#">
            <img src="img/logo/1.png" alt="" />
          </a>
        </div>
        <div className="menu">
          <ul className="anchor_nav">
            <li className="current">
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#service">Service</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <span className="ccc" />
        </div>
        <div className="button">
          <a href={`mailto:${email}`}>Contact Us</a>
        </div>
      </div>
    </div>
  );
};
export default Header;
