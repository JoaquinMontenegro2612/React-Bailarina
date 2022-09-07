import { useState, useEffect  } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { Spinner } from "@chakra-ui/react"
import { useParams} from 'react-router-dom'
import { db } from '../../Firebase/firebase'
import {collection, getDocs} from "firebase/firestore";

const ItemDetailContainer = () => {

    const [listaDeProductos, setListaDeProductos] = useState ({})
    const [loading, setLoading] = useState (true)

    const {id}= useParams()  

    useEffect(() => {

        const coleccionDeProductos = collection(db, "Productos")
        const consulta = getDocs(coleccionDeProductos)
        
        consulta
    .then(snapshot=>{
        const listaDeProductos = snapshot.docs.map(docs=>{
                    return{
                    ...docs.data(),
                    id: docs.id
                    }
                })
                setListaDeProductos(listaDeProductos.find(data => data.id === id))
                setLoading(false); 
                    })
            .catch(err=>
            {
            console.log(err);
            setLoading(false);
            })
            },[])

    return(
        <>
        {!loading ? <ItemDetail listaDeProductos={listaDeProductos}/>: <Spinner/>}
        </>
    )
}
export {ItemDetailContainer}