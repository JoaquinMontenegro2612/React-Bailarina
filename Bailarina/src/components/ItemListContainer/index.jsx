import {Heading, Spinner} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import ItemList from '../itemList/itemList'
import {useParams} from 'react-router-dom'
//comienzo uso firebase ↓↓
import { db } from '../../Firebase/firebase'
import { collection, getDocs , query , where } from "firebase/firestore"
import {toast} from "react-toastify"

const ItemListContainer = () => {
    const [listaDeProductos, setListaDeProductos] = useState([])
    const [loading, setLoading] = useState(false)
    const {id}=useParams()
  

    useEffect(() => {
      if (!id){
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
                  setListaDeProductos(listaDeProductos);
                  setLoading(false); 
                  })
          .catch(err=>
            {
            console.log(err);
            setLoading(false);
            })
          } else {
            const coleccionDeProductos = collection(db, "Productos")
            const filtro = query(coleccionDeProductos,
              where("categoria","==",id),
              where("stock",">",10))

            const consulta = getDocs(filtro)

            consulta
            .then(snapshot=>{
              const listaDeProductos = snapshot.docs.map(docs=>{
                          return{
                          ...docs.data(),
                          id: docs.id
                          }
                      })
                      setListaDeProductos(listaDeProductos);
                      setLoading(false);
                      })
                      .catch(err=>
                        {
                        toast.error("Error al cargar los cocteles")
                        })
                      }
},[id])

  



  return (
  <>
    <Heading>{!loading && <Spinner/>}</Heading>
    <ItemList listaDeProductos={listaDeProductos}/>
  </>
  )
}

export {ItemListContainer}