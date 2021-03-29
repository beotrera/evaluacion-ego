import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import Slider from "../slider/Slider"
import "./fichaContainer.css"


const FichaContainer=()=>{
    const [Data,setData] = useState({ model_highlights: [],model_features:[],photo:""})
    const {id}=useParams();
    var direct=true

    useEffect(()=>{
        new Promise (async(res,rej)=>{
           var resultado=await fetch(`https://challenge.agenciaego.tech/models/${id}`)
           .then(res => res.json())
           .then(res=> res)
           .catch(err=>console.log(err))
           res(resultado)
         }).then(res => setData(res))
     },[id,Data])

    return(
        <div className="ficha-container">
            <div className="title-container">
                <div className="title-container-img">
                    <img className="title-img" alt="slide" src={`https://challenge.agenciaego.tech${Data.photo}`}/>
                </div>
                <div className="title-container-text">
                    <h3>{Data.name}</h3>
                    <h1>{Data.title}</h1>
                    <p>{Data.description}</p>
                </div>
            </div>
            <div style={{marginBottom:60,marginTop:30}}>
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
                                                <img className="highlights-img" alt="slide" src={`https://challenge.agenciaego.tech${item.image}`}/>
                                            </div>
                                        </div>
                                        )
                                }
                                else
                                {
                                    return(
                                        <div className="highlights-containe-title" style={{marginTop:50}}>
                                            <div className="highlights-containe-title-img">
                                                <img className="highlights-img" alt="slide" src={`https://challenge.agenciaego.tech${item.image}`}/>
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