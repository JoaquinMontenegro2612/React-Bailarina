import { Box, Image, Badge, Text, Stack, HStack, FormControl, FormLabel,Select,Button} from "@chakra-ui/react"
import { useState } from 'react'
import {NavLink} from 'react-router-dom'
import {ItemCount}  from '../ItemCount'
import  {useCartContext}  from  '../../Context/Context'

const ItemDetail = ({ listaDeProductos }) => {
        console.log(listaDeProductos);
    const [isAdded,setIsAdded]= useState(false)

    const { addToCart } = useCartContext()

    const onAdd=(quantity) => {
        addToCart(listaDeProductos, quantity)
        setIsAdded(true)
    }

    return(
        <HStack bg={listaDeProductos.color} color={listaDeProductos.colorLetra}>
                <Image src={listaDeProductos.imagen} alt="Cover"/>
                <Box p={5}>
                        <Badge align='baseline'>
                        <Text textTransform='uppercase' fontSize='xl' color='gray.500' letterSpacing='wide'>Detalle del producto</Text>
                        </Badge>
                        <Text fontWeight='semibold' fontSize='xl' my={2} >{listaDeProductos.detalle}</Text>
                            <Text fontWeight='bold' fontSize='2xl'>{listaDeProductos.descripcion}</Text>
                        <br/>
                        <Stack justify='space-around'>
                                <Text fontWeight='semibold' fontSize='xl'>En este momento nos quedan {listaDeProductos.stock} en stock</Text>
                        </Stack>
                </Box>
                <Box textAlign='center' pr='10'fontWeight='bold'>
                <br/>
                <Box>
                    <Text fontWeight='light' fontSize='xl'>Precio por unidad</Text>
                <Text id="precio" fontWeight='light' fontSize='xl'> ${listaDeProductos.precio}</Text>
                </Box>
                <FormControl>
                    <FormLabel fontWeight='light' fontSize='xl'>Medidas de tu botella</FormLabel>
                    <Select placeholder='Selecciona la medida' bg={listaDeProductos.color}  fontWeight='light' fontSize='xl'>
                    <option>250 ML</option>
                    <option>500 ML</option>
                    </Select>
                </FormControl>
                <br/>
                {
                    isAdded ? 
                    <NavLink to='/Cart'>
                        <Button w='250px'> Ir al Carrito</Button>
                    </NavLink>
                    :
                    <ItemCount initial={listaDeProductos.initial} stock={listaDeProductos.stock} onAdd={onAdd} />

                }
                
                </Box>
        </HStack>

        
    )
}
export {ItemDetail}

