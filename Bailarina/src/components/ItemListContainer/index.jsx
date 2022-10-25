  import { Heading, Spinner } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import ItemList from '../itemList/itemList'
import { useParams } from 'react-router-dom'
import { db } from '../../Firebase/firebase'
import { collection, getDocs} from "firebase/firestore"
// , query , where
// import {toast} from "react-toastify"

const ItemListContainer = () => {
    const [listaDeProductos, setListaDeProductos] = useState([])
    const [loading, setLoading] = useState(false)
    const { categoria } = useParams("/")
  
    useEffect(() => {
      // if (!id){
      const coleccionDeProductos = collection(db, "Productos")
      const consulta = getDocs(coleccionDeProductos)
      consulta
      .then(snapshot => {
        if (categoria) {
          setLoading(true)

          const prod = snapshot.docs.map(doc => {
            return {
              ...doc.data(),
              id: doc.id
            }      
          })
          setListaDeProductos(prod.filter(productos => productos.categoria === categoria))         
        }else{
          setLoading(true)

          const prod = snapshot.docs.map(doc => {
            return {
              ...doc.data(),
              id: doc.id
            }      
          })
          setListaDeProductos(prod)
        }
      })
  .catch(err => {console.log(err)})
} , [categoria]
)

  return (
  <>
    <Heading>{!loading && <Spinner/>}</Heading>
    <ItemList listaDeProductos={listaDeProductos}/>
  </>
  )
}

export {ItemListContainer}

//       .then(snapshot=>{
//         const listaDeProductos = snapshot.docs.map(docs=>{
  //                     return{
    //                     ...docs.data(),
//                     id: docs.id
//                     }
//                 })
//                   setListaDeProductos(listaDeProductos);
//                   setLoading(true); 
//                   })
//           .catch(err=>
//             {
//             console.log(err);
//             setLoading(false);
//             })
//           } else {
//             const coleccionDeProductos = collection(db, "Productos")
//             const filtro = query(coleccionDeProductos,
//               where("categoria","==",id),
//               where("stock",">",10))
//             const consulta = getDocs(filtro)
//             consulta
//             .then(snapshot=>{
//               const listaDeProductos = snapshot.docs.map(docs=>{
//                           return{
//                           ...docs.data(),
//                           id: docs.id
//                           }
//                       })
//                       setListaDeProductos(listaDeProductos);
//                       setLoading(false);
//                       })
//                       .catch(err=>
//                         {
//                         toast.error("Error al cargar los cocteles")
//                         })
//                       }
// },[id])