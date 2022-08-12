import { useState, useEffect  } from "react";
import { productos } from "../../Utils/productos"
import { customFetch }from "../../assets/customFetch"
import { ItemDetail } from "../ItemDetail/ItemDetail";
import {Spinner} from "@chakra-ui/react"

const ItemDetailContainer = () => {

    const [listaDeProducto, setListaDeProducto] = useState ({})
    const [loading, setLoading] = useState (true)
    
    useEffect(()=>{
        setLoading(true)
        customFetch(productos)
        .then(res => 
            {
                setLoading(false)
                setListaDeProducto(res.find(item => item.id === 1))
        }
    )}, [])
    return(
        <>
        {!loading ? <ItemDetail listaDeProducto={listaDeProducto}/>: <Spinner/>}
        </>
    )
}
export {ItemDetailContainer}