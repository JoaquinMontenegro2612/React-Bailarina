import { Box, Image, Badge, Text, Stack, HStack, FormControl, FormLabel,Select,Button} from "@chakra-ui/react"
import {ItemCount}  from '../ItemCount'
import { useState } from 'react'
import {NavLink} from 'react-router-dom'
const ItemDetail = ({ listaDeProducto }) => {

    const[isAdded,setIsAdded]= useState(false)
    
    const onAdd=()=>{
    setIsAdded(true)
}
    return(
        <HStack bg={listaDeProducto.color} color={listaDeProducto.colorLetra}>
                <Image src={listaDeProducto.image} alt="Cover"/>
                <Box p={5}>
                        <Badge align='baseline'>
                        <Text textTransform='uppercase' fontSize='xl' color='gray.500' letterSpacing='wide'>Detalle del producto</Text>
                        </Badge>
                        <Text as='h3' fontWeight='semibold' fontSize='xl' my={2} >{listaDeProducto.detalle}</Text>
                            <Text fontWeight='bold' fontSize='2xl'>{listaDeProducto.descripcion}</Text>
                        <br/>
                        <Stack justify='space-around'>
                                <Text fontWeight='semibold' fontSize='xl'>En este momento nos quedan {listaDeProducto.stock} en stock</Text>
                        </Stack>
                </Box>
                <Box textAlign='center' pr='10'fontWeight='bold'>
                <br/>
                <Box>
                    <Text fontWeight='light' fontSize='xl'>Precio por unidad</Text>
                <Text id="precio" fontWeight='light' fontSize='xl'> ${listaDeProducto.precio}</Text>
                </Box>
                <FormControl>
                    <FormLabel fontWeight='light' fontSize='xl'>Medidas de tu botella</FormLabel>
                    <Select placeholder='Selecciona la medida  ' bg={listaDeProducto.color}  fontWeight='light' fontSize='xl'>
                    <option>250 ML</option>
                    <option>500 ML</option>
                    </Select>
                </FormControl>
                <br/>
                {
                    isAdded ? 
                    <NavLink to='/Cart'>
                        <Button> Ir al Carrito</Button>
                    </NavLink>
                    :
                    <ItemCount initial={listaDeProducto.initial} stock={listaDeProducto.stock} onAdd={onAdd} />

                }
                {/* <Button colorScheme='blue' size='lg' mt='3' boxShadow='sm' _hover={{boxShadow:'md'}} _active={{boxShadow:'lg'}}>Comprar</Button> */}
                </Box>
        </HStack>

        
    )
}
export {ItemDetail}

