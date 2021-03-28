import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import Slider from "../slider/Slider"
import ItemsAPI from "./fichaItem"
import "./fichaContainer.css"


const FichaContainer=()=>{
    const [Data,setData] = useState({ model_highlights: [],model_features:[]})
    const {id}=useParams();
    var direct=true

    useEffect(()=>{
        new Promise ((res,rej)=>{
           res(GetData())
         }).then(res => setData(res))
     },[])

     const GetData =()=>{
        return ItemsAPI
     }
    return(
        <div className="ficha-container">
            <div className="title-container">
                <div className="title-container-img">
                    <img className="title-img" src={`https://challenge.agenciaego.tech${Data.photo}`}/>
                </div>
                <div className="title-container-text">
                    <h3>{Data.name}</h3>
                    <h1>{Data.title}</h1>
                    <p>{Data.description}</p>
                </div>
            </div>
            <div style={{marginBottom:20,marginTop:20}}>
                <Slider item={Data}/>
            </div>
            <div className="highlights-container">
                {Data.model_highlights.map(item=>{
                                if(direct)
                                {
                                    direct=false;
                                    return(
                                        <div className="highlights-containe-title">
                                            <div className="highlights-containe-title-text">
                                                <h3>{item.title}</h3>
                                                <p>{item.content}</p>
                                            </div>
                                            <div className="highlights-containe-title-img">
                                                <img className="highlights-img" src={`https://challenge.agenciaego.tech${item.image}`}/>
                                            </div>
                                        </div>
                                        )
                                }
                                else
                                {
                                    return(
                                        <div className="highlights-containe-title">
                                            <div className="highlights-containe-title-img">
                                                <img className="highlights-img" src={`https://challenge.agenciaego.tech${item.image}`}/>
                                            </div>
                                            <div className="highlights-containe-title-text img-right">
                                                <h3>{item.title}</h3>
                                                <p>{item.content}</p>
                                            </div>
                                        </div>
                                    )
                                }
                            })}
            </div>
        </div>
    )
}


export default FichaContainer