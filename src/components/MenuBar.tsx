import "./MenuBar.less";
import Instagram from "../svg/instagram.svg";

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
                title="Close"
                className="subsection__close-button"
                src={Instagram}
                alt="Close"
              />
            </a>
            <a href="mailto:shanegallagherphotography@gmail.com">shanegallagherphotography@gmail.com</a>
            </div>
            </div>
      </div>
    );
  };
  
  export default MenuBar;