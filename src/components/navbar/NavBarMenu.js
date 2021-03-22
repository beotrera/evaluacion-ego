import "./NavBarMenu.css"
import fill from  "../../img/fill-1.png"

const NavBarMenu =()=>{
    return(
        <nav className="header-navbar-menu">
        <div className="navbar-menu-logo">
            <button className="navbar-menu-button">
                <span className="navbar-menu-button-text">Cerrar</span>
                <img src={fill} className="navbar-menu-img"></img>
            </button>
        </div>
        <div className="navbar-menu-container-list">
            <ul className="navbar-menu-list">
                <li className="navbar-menu-list-item">
                    <a href="#" className="navbar-menu-list-item-link">
                        <span className="navbar-menu-list-item-link-text">Modelos</span>
                    </a>
                </li>
                <li className="navbar-menu-list-item">
                <a href="#" className="navbar-menu-list-item-link">
                        <span className="navbar-menu-list-item-link-text">Servicios y Accesorios</span>
                    </a>
                </li>
                <li className="navbar-menu-list-item">
                <a href="#" className="navbar-menu-list-item-link">
                        <span className="navbar-menu-list-item-link-text">Financiación</span>
                    </a>
                </li>
                <li className="navbar-menu-list-item">
                <a href="#" className="navbar-menu-list-item-link">
                        <span className="navbar-menu-list-item-link-text">Reviews y Comunidad</span>
                    </a>
                </li>
                <li className="separador"></li>
                <li className="navbar-menu-list-item">
                <a href="#" className="navbar-menu-list-item-link">
                        <span className="navbar-menu-list-item-link-text">Toyota Mobility Service</span>
                    </a>
                </li>
                <li className="navbar-menu-list-item">
                <a href="#" className="navbar-menu-list-item-link">
                        <span className="navbar-menu-list-item-link-text">Toyota Gazoo Racing</span>
                    </a>
                </li>
                <li className="navbar-menu-list-item">
                <a href="#" className="navbar-menu-list-item-link">
                        <span className="navbar-menu-list-item-link-text">Toyota Híbridos</span>
                    </a>
                </li>
                <li className="separador"></li>
                <li className="navbar-menu-list-item">
                <a href="#" className="navbar-menu-list-item-link">
                        <span className="navbar-menu-list-item-link-text">Concesionarios</span>
                    </a>
                </li>
                <li className="navbar-menu-list-item">
                <a href="#" className="navbar-menu-list-item-link">
                        <span className="navbar-menu-list-item-link-text">Test Drive</span>
                    </a>
                </li>
                <li className="navbar-menu-list-item">
                <a href="#" className="navbar-menu-list-item-link">
                        <span className="navbar-menu-list-item-link-text">Contacto</span>
                    </a>
                </li>
            </ul>
            <ul className="navbar-menu_list-second">
                <li className="navbar-menu-list-item">
                    <a href="#" className="navbar-menu-list-item-link">
                        <span className="navbar-menu-list-item-link-text">Actividades</span>
                    </a>
                </li>
                <li className="navbar-menu-list-item">
                    <a href="#" className="navbar-menu-list-item-link">
                        <span className="navbar-menu-list-item-link-text">Servicios al Cliente</span>
                    </a>
                </li>
                <li className="navbar-menu-list-item">
                    <a href="#" className="navbar-menu-list-item-link">
                        <span className="navbar-menu-list-item-link-text">Ventas Especiales</span>
                    </a>
                </li>
                <li className="navbar-menu-list-item">
                    <a href="#" className="navbar-menu-list-item-link">
                        <span className="navbar-menu-list-item-link-text">Innovación</span>
                    </a>
                </li>
                <li className="navbar-menu-list-item">
                    <a href="#" className="navbar-menu-list-item-link">
                        <span className="navbar-menu-list-item-link-text">Prensa</span>
                    </a>
                </li>
                <li className="navbar-menu-list-item">
                    <a href="#" className="navbar-menu-list-item-link">
                        <span className="navbar-menu-list-item-link-text">Acerca de...</span>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
    )
}

export default NavBarMenu