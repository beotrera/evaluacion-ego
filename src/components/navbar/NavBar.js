import "./NavBar.css"
import logo from  "../../img/logo.svg"
import gray from  "../../img/gray.png"
import fill from  "../../img/fill-1.png"

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
            <nav className="header-navbar-menu">
                <div>
                    <button >
                        <span>Cerrar</span>
                        <img src={fill}></img>
                    </button>
                </div>
                <div>
                    <ul>
                        <li>
                            <a href="#">
                                <span>Modelos</span>
                            </a>
                        </li>
                        <li>
                        <a href="#">
                                <span>Servicios y Accesorios</span>
                            </a>
                        </li>
                        <li>
                        <a href="#">
                                <span>Financiación</span>
                            </a>
                        </li>
                        <li>
                        <a href="#">
                                <span>Reviews y Comunidad</span>
                            </a>
                        </li>
                        <li className="separador"></li>
                        <li>
                        <a href="#">
                                <span>Toyota Mobility Service</span>
                            </a>
                        </li>
                        <li>
                        <a href="#">
                                <span>Toyota Gazoo Racing</span>
                            </a>
                        </li>
                        <li>
                        <a href="#">
                                <span>Toyota Híbridos</span>
                            </a>
                        </li>
                        <li className="separador"></li>
                        <li>
                        <a href="#">
                                <span>Concesionarios</span>
                            </a>
                        </li>
                        <li>
                        <a href="#">
                                <span>Test Drive</span>
                            </a>
                        </li>
                        <li>
                        <a href="#">
                                <span>Contacto</span>
                            </a>
                        </li>
                    </ul>
                    <ul>
                    <li>
                        <a href="#">
                                <span>Actividades</span>
                            </a>
                        </li>
                        <li>
                        <a href="#">
                                <span>Servicios al Cliente</span>
                            </a>
                        </li>
                        <li>
                        <a href="#">
                                <span>Ventas Especiales</span>
                            </a>
                        </li>
                        <li>
                        <a href="#">
                                <span>Innovación</span>
                            </a>
                        </li>
                        <li>
                        <a href="#">
                                <span>Prensa</span>
                            </a>
                        </li>
                        <li>
                        <a href="#">
                                <span>Acerca de...</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}


export default NavBar;