import "./NavBar.css"
import logo from  "../../img/logo.svg"
import gray from  "../../img/gray.png"
import ItemMenu from "./ItemMenu"
import ItemMenuSecond from "./ItemMenuSecond"
import fill from  "../../img/fill-1.png"
import React, { useState } from 'react';

const NavBar = () =>{
    const [isOpen,setisOpen] = useState(true)

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
                <button className="navbar-menu-buttom" onClick={e=>setisOpen(false)}>
                    <span className="navbar-menu-text">Menú</span>
                    <img src={gray} className="logo-menu"></img>
                </button>
            </div>
            <nav className={isOpen ? 'header-navbar-menu-hidden':'header-navbar-menu-hidden open'}>
                <div className="navbar-menu-logo">
                    <button className="navbar-menu-button" onClick={(e)=>setisOpen(true)}>
                        <span className="navbar-menu-button-text">Cerrar</span>
                        <img src={fill} className="navbar-menu-img"></img>
                    </button>
                </div>
                <div className="navbar-menu-container-list">
                    <ul className="navbar-menu-list">
                        {ItemMenu.map(item=>{
                            console.log(item.title != "separador")
                            if(item.title != "separador")
                            {
                                return(
                                    <li className="navbar-menu-list-item">
                                        <a href={item.url} className="navbar-menu-list-item-link">
                                            <span className="navbar-menu-list-item-link-text">{item.title}</span>
                                        </a>
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
                                            <a href={item.url} className="navbar-menu-list-item-link">
                                                <span className="navbar-menu-list-item-link-text">{item.title}</span>
                                            </a>
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