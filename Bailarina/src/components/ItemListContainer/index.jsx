import {Heading, Spinner} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { productos } from '../../Utils/productos'
import { customFetch } from '../../assets/customFetch'
import ItemList from '../itemList/itemList'
import {useParams} from 'react-router-dom'

const ItemListContainer = ({gretting}) => {
    const [listaDeProductos, setListaDeProductos] = useState([])
    const [loading, setLoading] = useState(false)
  
    const {categoria}=useParams()

    useEffect(() => {
      setLoading(false)
      customFetch(productos)
        .then(data => {
          if (categoria) {
            setLoading(true)
            setListaDeProductos(data.filter(prod => prod.categoria === categoria))
          }
          else{
            setLoading(true)
            setListaDeProductos(data)
          }
        })
    }, [categoria])


  return (
  <>
    <Heading>{gretting}</Heading>
    <Heading>{!loading && <Spinner/>}</Heading>
    <ItemList listaDeProductos={listaDeProductos}/>
  </>
  )
}

export {ItemListContainer}