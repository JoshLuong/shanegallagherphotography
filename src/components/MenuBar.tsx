import "./MenuBar.less";
import Instagram from "../svg/instagram.svg";
import Mail from "../svg/mail.svg";

const MenuBar = () => {
    return (
      <div className="menu-bar__container">
            <div className="menu-bar__hamburger-lines">
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
            </div>
            <div className="menu-bar__content-container">
            <div className="menu-bar__content">
            <a href="https://www.instagram.com/shanegallagher_/" target="_blank" rel="noreferrer">
            <img
                src={Instagram}
                alt="Instagram Icon"
              />
            </a>
            <a href="mailto:shanegallagherphotography@gmail.com" target="_blank" rel="noreferrer">
            <img
                src={Mail}
                alt="Mail Icon"
              />
            </a>
            </div>
            </div>
      </div>
    );
  };
  
  export default MenuBar;