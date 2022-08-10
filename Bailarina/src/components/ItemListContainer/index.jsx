import {Heading, Spinner} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { productos } from '../../Utils/productos'
import { customFetch } from '../../assets/customFetch'
import ItemList from '../itemList/itemList'

const ItemListContainer = ({gretting}) => {
    const [listaDeProductos, setListaDeProductos] = useState([])
    const [loading, setLoading] = useState(false)
  
    useEffect(() => {
      customFetch(productos)
        .then(data => {
          setLoading(true)
          setListaDeProductos(data)})
    }, [])


  return (
  <>
    <Heading>{gretting}</Heading>
    <Heading>{!loading && <Spinner/>}</Heading>
    <ItemList listaDeProductos={listaDeProductos}/>
  </>
  )
}

export {ItemListContainer}