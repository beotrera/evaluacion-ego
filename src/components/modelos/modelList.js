import Model from "./model"
const ModelList =({items})=>{
    return(
        <ul style={{display:"flex",flexWrap:"wrap",justifyContent:"center",marginTop:75,marginBottom:75}}>
            {
                items.map(x =>(<Model items={x}/>))
            }
        </ul>
    )
}



export default ModelList