import {Heading, Spinner} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import ItemList from '../itemList/itemList'
import {useParams} from 'react-router-dom'
//comienzo uso firebase ↓↓
import { db } from '../../Firebase/firebase'
import { collection,getDocs } from 'firebase/firestore'

const ItemListContainer = () => {
    const [listaDeProductos, setListaDeProductos] = useState([])
    const [loading, setLoading] = useState(false)
  
    const {categoria}=useParams()

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
                  setListaDeProductos(listaDeProductos);
                  setLoading(false); 
                  })
          .catch(err=>
            {
            console.log(err);
            setLoading(false);
            })
          },[])

          



  return (
  <>
    <Heading>{!loading && <Spinner/>}</Heading>
    <ItemList listaDeProductos={listaDeProductos}/>
  </>
  )
}

export {ItemListContainer}