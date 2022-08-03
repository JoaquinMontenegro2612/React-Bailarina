import {Heading} from '@chakra-ui/react'
import {ItemCount} from '../ItemCount'
const ItemListContainer = ({gretting}) => {
  return (
    <>
    <Heading>{gretting}</Heading>
    <ItemCount initial={1} stock={5} onAdd={()=> {}}/>
    </>
  )
}

export {ItemListContainer}