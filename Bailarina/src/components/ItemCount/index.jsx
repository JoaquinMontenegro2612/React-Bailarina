import { useState } from 'react';
import { HStack, Button, Text } from '@chakra-ui/react'
const ItemCount = ({ initial, stock, onAdd}) => {
const [count, setCount]= useState(initial)  
const sumar = () => count < stock && setCount (count + 1)
const restar = () => count > initial && setCount (count - 1)
    return (
        <HStack>
            <Button variant='ghost' colorScheme='whatsapp' size='sm' onClick={restar}>-</Button>
            <Text>{count}</Text>
            <Button variant='ghost' colorScheme='whatsapp' size='sm' onClick={sumar}>+</Button>
            <Button colorScheme='red' size='sm'>Agregar al Carrito</Button>

        </HStack>
)
}

export {ItemCount}