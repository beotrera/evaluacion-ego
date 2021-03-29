import "./NavBar.css"
import logo from  "../../img/logo@3x.png"
import gray from  "../../img/gray.png"
import ItemMenu from "./ItemMenu"
import ItemMenuSecond from "./ItemMenuSecond"
import fill from  "../../img/fill-1.png"
import React, { useState } from 'react';
import  {NavLink} from "react-router-dom"

const NavBar = () =>{
    const [isOpen,setisOpen] = useState(true)

    return(
        <header className="nav-container">
            <div className={isOpen ? 'nav-backdrop':'nav-backdrop openB'} onClick={(e)=>setisOpen(true)}></div>
            <NavLink  to="/" className="logo-link" activeClassName="none"><img src={logo} className="logo" alt="logo"></img></NavLink>
            <nav className="header-navbar">
                <ul className="header-navbar-list">
                    <li className="header-navbar-item">
                        <NavLink to="/modelos" className="header-navbar-item-link" activeClassName="active">
                            <span className="header-navbar-item-link-text">Modelos</span>
                        </NavLink>
                    </li>
                    <li className="header-navbar-item">
                        <NavLink to="/ficha/" className="header-navbar-item-link" activeClassName="active">
                            <span className="header-navbar-item-link-text">Ficha de Modelos</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className="navbar-menu-container">
                <button className="navbar-menu-buttom" onClick={e=>setisOpen(false)}>
                    <span className="navbar-menu-text">Menú</span>
                    <img src={gray} className="logo-menu" alt="gray"></img>
                </button>
            </div>
            <nav className={isOpen ? 'header-navbar-menu-hidden':'header-navbar-menu-hidden open'}>
                <div className="navbar-menu-logo">
                    <button className="navbar-menu-button" onClick={(e)=>setisOpen(true)}>
                        <span className="navbar-menu-button-text">Cerrar</span>
                        <img src={fill} className="navbar-menu-img" alt="fill"></img>
                    </button>
                </div>
                <div className="navbar-menu-container-list">
                    <ul className="navbar-menu-list">
                        {ItemMenu.map(item=>{
                            if(item.title !== "separador")
                            {
                                return(
                                    <li className="navbar-menu-list-item">
                                        <NavLink to={item.url} className="navbar-menu-list-item-link" activeClassName="none" onClick={(e)=>setisOpen(true)}>
                                            <span className="navbar-menu-list-item-link-text">{item.title}</span>
                                        </NavLink>
                                    </li>)
                            }
                            else
                            {
                                return(<li className="separador"></li>)
                            }
                        })}
                    </ul>
                    <ul className="navbar-menu_list-second">
                        {ItemMenuSecond.map(item=>{
                                    return(
                                        <li className="navbar-menu-list-item">
                                            <NavLink to={item.url} className="navbar-menu-list-item-link" activeClassName="none" onClick={(e)=>setisOpen(true)}>
                                                <span className="navbar-menu-list-item-link-text">{item.title}</span>
                                            </NavLink>
                                        </li>
                                    )
                                    }
                        )}
                    </ul>
                </div>
            </nav>
        </header>
    )
}


export default NavBar;