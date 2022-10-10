import React, { useState, useEffect } from 'react';
import {useParams} from "react-router-dom";
import Slider from "../slider/Slider"
import "./fichaContainer.css"
import apiData from '../../API_Toyota/FichaList'


const FichaContainer=()=>{
    const [Data,setData] = useState({ model_highlights: [],model_features:[],photo:""})
    const [isLoading,setisLoading] = useState(false);
    const {id}=useParams();
    var direct=true

    useEffect(()=>{
        setData(apiData[id])
     },[id,Data])

    return(
    <div>
        <div className="ficha-container" style={isLoading?{display:"none"}:{display:"block"}}>
            <div className="title-container">
                <div className="title-container-img">
                    <img className="title-img" alt="slide" src={`${process.env.PUBLIC_URL}${Data.photo}`}/>
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
                                                <img className="highlights-img" alt="slide" src={`${process.env.PUBLIC_URL}${item.image}`}/>
                                            </div>
                                        </div>
                                        )
                                }
                                else
                                {
                                    return(
                                        <div className="highlights-containe-title" style={{marginTop:50}}>
                                            <div className="highlights-containe-title-img">
                                                <img className="highlights-img" alt="slide" src={`${process.env.PUBLIC_URL}${item.image}`}/>
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
    </div>
    )
}


export default FichaContainer