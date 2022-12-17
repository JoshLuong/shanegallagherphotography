import "./MenuBar.less";

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
            Inclusion and diversity are some of my core values. 
I strive to put those I’m working with at ease and to provide a safe environment to collaborate and create something great. 
            </div>
            </div>
      </div>
    );
  };
  
  export default MenuBar;