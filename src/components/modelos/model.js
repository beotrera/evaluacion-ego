import "./model.css"
import  {Link} from "react-router-dom"
import React, { useState } from 'react';

const Model=({items})=>{
    const [isHover, setHover] = useState(false);
    const [isHoverB, setHoverB] = useState(false);

    return(
        <li className="model-container" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <div className={isHover?"model-title-container isHover":"model-title-container"}>
                <h2 className="model-title">{items.name}</h2>
            </div>
            <div className="model-year-price-container">
                <p className="model-year-price">{`${items.year} | $${new Intl.NumberFormat().format(items.price)}`}</p>
            </div>
            <img className="model-img" src={`${process.env.PUBLIC_URL}${items.photo}`} alt="foto-model"></img>
            <div className="model-button-container">
                <button className={isHover?"model-button isHoverB":"model-button"} onMouseEnter={() => setHoverB(true)} onMouseLeave={() => setHoverB(false)}>
                    <Link  className={isHoverB? "model-button-link link":"model-button-link"} to={`/ficha/${items.id}`}>Ver Modelo</Link>
                </button>
            </div>
        </li>
    )
}


export default Model