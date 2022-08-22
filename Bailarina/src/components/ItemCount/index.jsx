import {HStack, Button,Text} from '@chakra-ui/react'
import { useState } from 'react'

const ItemCount = ({ initial, stock, onAdd}) => {
    const [count, setCount] = useState(initial)
    const aumentar =()=> count < stock && setCount (count +1)
    const restar   =()=> count > initial && setCount (count -1) 
    return (
        <HStack>
                <Button size='md' height='20px' width='50px' border='2px' borderColor='transparent' onClick={restar} >-</Button>
                <Text>{count}</Text>
                <Button size='md' height='20px' width='50px' border='2px' borderColor='transparent' onClick={aumentar}>+</Button>
            <Button  variant='outline' size='lg' onClick={onAdd}>Agregar al Carrito</Button>
        </HStack>
)
}

export {ItemCount}