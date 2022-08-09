import {Heading, Spinner} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { productos } from '../../assets/productos'

import ItemList from '../itemList/itemList'

const ItemListContainer = ({gretting}) => {
    const [listaDeProductos, setlistaDeProductos] = useState([])
    const [loading, setLoading] = useState(false)
  
    useEffect(() => {
      customFetch(productos)
        .then(data => {
          setLoading(true)
          setListProducts(data)})
    }, [])


  return (
  <>
    <Heading>{gretting}</Heading>
    <ItemList listaDeProductos={listaDeProductos}/>
    <Heading as="div" >{!loading && <Spinner/>}</Heading>
  </>
  )
}

export {WItemListContainer}