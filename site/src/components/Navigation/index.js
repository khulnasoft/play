import { useState, useEffect } from "react";
import { Header } from "./Navigation.styles";
import meshplayLogo from '../../assets/images/meshplay-learn-logo.png';
import meshplayLogoLight from '../../assets/images/meshplay-learn-logo-white.png';
import { Toggle } from "../Toggle";

function Navigation({theme, toggleTheme, showSignUpButton}) {


  const [openNav, setOpenNav] = useState(false);
  const Logo = theme === 'light' ? meshplayLogo : meshplayLogoLight;
  const [scroll, setScroll] = useState(false);

  
  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.pageYOffset > 50 ? setScroll(true) : setScroll(false)
    );
  }, []);


  const handleNavOpen = ()=>{
      setOpenNav(!openNav);
  }

  return (
    <Header>       
      <nav className={scroll ? "scrolled" : ""}>
        <img className="logo" src={Logo} alt="Meshplay Logo" />
        <div className="btn-container">
          <Toggle theme={theme} toggleTheme={toggleTheme} />
          {showSignUpButton && <a href="#signup-form" className="signup-btn" role="button">Sign Up</a>}
          {/* <a href="https://playground.meshplay.khulnasoft.com" className="login-btn" role="button">Login</a> */}
        </div>
        <div className="dropdown_btn" onClick={handleNavOpen}>
          {openNav ? 
            (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hamburger-icon">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>)
            : (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hamburger-icon" >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>)}
        </div>        
      </nav>
      <div className={openNav ? "dropdown_menu_opened" : "dropdown_menu_closed"}>
            <div className="mode-btn">
              <Toggle theme={theme} toggleTheme={toggleTheme} />
            </div>
            <div className="action-btns">
              <a href="#signup-form" className="signup-btn" role="button">Sign Up</a>
              {/* <a href="https://demo.meshplay.khulnasoft.com" className="login-btn" role="button">Login</a> */}
            </div>
      </div>
    </Header>
  )
}

export default Navigation