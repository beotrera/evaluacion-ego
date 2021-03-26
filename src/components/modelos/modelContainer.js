import ModelList from "./modelList"
import "./modelContainer.css"
import  arrow from "../../img/arrow@3x.png"
import ItemsAPI from "./modelsItems"
import React, { useState, useEffect } from 'react';
import {useParams,NavLink,Link} from "react-router-dom";
import  SortArray from "sort-array"

const ModelContainer = () =>{
   const [data,setData] = useState([]);
   const [filter,setFilter] = useState("priceA");
   const [isOpenOrder,setOpenOrder] = useState(false);
   const [isOpenFilter,setOpenFilter] = useState(false);

   const {id} = useParams();
   var Data=[]

   useEffect(()=>{
      new Promise ((res,rej)=>{
         Data=GetData()
         switch (filter){
            case "yearA":
               Data=SortArray(Data,{by:"year",order:"asc"})
               break
            case "yearD":
               Data=SortArray(Data,{by:"price",order:"desc"})
               break
            case "priceA":
               Data=SortArray(Data,{by:"price",order:"asc"})
               break
            case "priceD":
               Data=SortArray(Data,{by:"price",order:"desc"})
               break
            default:
               Data=SortArray(Data,{by:"id",order:"asc"})
            }
         Filter()
         res(Data)
       }).then(res => setData(res))
   },[id,filter])

   const GetData =()=>{
      return ItemsAPI
   }
   const Filter =()=>{
      if(id !== undefined){Data=Data.filter(x => x.segment === id)}
      return 0
    }

    return(
        <div className="modelContainer">
        <h2 className="modelContainer-title">Descubrí todos los modelos</h2>
        <div className="fiter-container">
           <div className="filter-container-segmente-open">
               <span className="filter-container-text">Filtrar Por </span>
               <NavLink className="filter-button-open" exact to="/modelos" activeClassName="select">Todos</NavLink>
               <NavLink className="filter-button-open" to="/modelos/Autos" activeClassName="select">Autos</NavLink>
               <NavLink className="filter-button-open" to="/modelos/Pickups y Comerciales" activeClassName="select">Pickups y Comerciales</NavLink>
               <NavLink className="filter-button-open" to="/modelos/SUVs y Crossovers" activeClassName="select">SUVs y Crossovers</NavLink>
            </div>
            <div className="filter-button-container dropdown" onMouseEnter={() => setOpenFilter(true)} onMouseLeave={() => setOpenFilter(false)}>
               <div>
                  <button className="filter-button left-text">
                     <span className="filter-container-text">Filtrar Por</span>
                     <img className={isOpenFilter?"arrow rotate":"arrow"} src={arrow}  alt="arrow"></img>
                  </button>
               </div>
               <ul className={isOpenFilter?"filter-button-container-list isOpen":"filter-button-container-list"} >
                  <li className="filter-button-container-list-item-left line-bottom">
                     <button className="dropdownButton">
                        <Link exact to="/modelos" activeClassName="none"  onClick={e=>setOpenFilter(!isOpenFilter)}>Todos</Link>
                     </button>
                  </li>
                  <li className="filter-button-container-list-item-left line-bottom ">
                     <button className="dropdownButton">
                     <Link  to="/modelos/Autos" activeClassName="none"  onClick={e=>setOpenFilter(!isOpenFilter)}>Autos</Link>
                     </button>
                  </li>
                  <li className="filter-button-container-list-item-left line-bottom">
                     <button className="dropdownButton">
                     <Link  to="/modelos/Pickups y Comerciales" activeClassName="none"  onClick={e=>setOpenFilter(!isOpenFilter)}>Pickups y Comerciales</Link>
                     </button>
                  </li>
                  <li className="filter-button-container-list-item-left line-bottom">
                     <button className="dropdownButton">
                     <Link  to="/modelos/SUVs y Crossovers" activeClassName="none"  onClick={e=>setOpenFilter(!isOpenFilter)}>SUVs y Crossovers</Link>
                     </button>
                  </li>
               </ul>
            </div>
            {/* ordenar por */}
            <div className="filter-button-container" onMouseEnter={() => setOpenOrder(true)} onMouseLeave={() => setOpenOrder(false)}>
               <div>
                  <button className="filter-button right-text">
                     <span className="filter-container-text">Ordenar Por</span>
                     <img className="arrow" src={arrow}  alt="arrow"></img>
                  </button>
               </div>
               <ul className={isOpenOrder?"filter-button-container-list isOpen":"filter-button-container-list"} >
                  <li className="filter-button-container-list-item line-bottom" onClick={e=>setFilter("")}>Nada</li>
                  <li className="filter-button-container-list-item line-bottom" onClick={e=>setFilter("priceA")}>De <strong>menor</strong> a <strong>mayor</strong> precio</li>
                  <li className="filter-button-container-list-item line-bottom" onClick={e=>setFilter("priceD")}>De <strong>menor</strong> a <strong>mayor</strong> precio</li>
                  <li className="filter-button-container-list-item line-bottom" onClick={e=>setFilter("yearD")}>Más <strong>nuevos</strong> primero</li>
                  <li className="filter-button-container-list-item" onClick={e=>setFilter("yearA")}>Más <strong>viejos</strong> primero</li>
               </ul>
            </div>
        </div>
        <div className="line"></div>
        <ModelList items={data}/>
    </div>
    )
};



export default ModelContainer