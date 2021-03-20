import "./NavBar.css"
import logo from  "../../img/logo.svg"
import gray from  "../../img/gray.png"

const NavBar = () =>{

    return(
        <header className="nav-container">
            <div className="nav-backdrop"></div>
            <a className="logo-link"><img src={logo} className="logo"></img></a>
            <nav className="header-navbar">
                <ul className="header-navbar-list">
                    <li className="header-navbar-item">
                        <a href="https://www.youtube.com" target="_blank" className="header-navbar-item-link">
                            <span className="header-navbar-item-link-text">Modelos</span>
                        </a>
                    </li>
                    <li className="header-navbar-item">
                        <a href="#" className="header-navbar-item-link">
                            <span className="header-navbar-item-link-text">Ficha de Modelos</span>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="navbar-menu-container">
                <button className="navbar-menu-buttom">
                    <span className="navbar-menu-text">Menú</span>
                    <img src={gray} className="logo-menu"></img>
                </button>
            </div>
            <nav className="header-navbar-menu"></nav>
        </header>
    )
}


export default NavBar;