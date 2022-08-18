import {VStack, Button, Text, NumberInput,NumberInputField,NumberInputStepper,NumberIncrementStepper,NumberDecrementStepper,} from '@chakra-ui/react'
import { useState } from 'react'

const ItemCount = ({ initial, stock, onAdd}) => {
    const [count, setCount] = useState=(initial)
    const NumberIncrementStepper =()=> count< stock 
    return (
        <VStack>
                <NumberInput size='md' maxW={24} defaultValue={0} min={1} >
                    <NumberInputField />
                        <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                        </NumberInputStepper>
                </NumberInput>
            <Button colorScheme='transparent' variant='outline' size='lg' >Agregar al Carrito</Button>
        </VStack>
)
}

export {ItemCount}