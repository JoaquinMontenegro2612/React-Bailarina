import { Text,Box,HStack,Image,Badge,Stack  } from '@chakra-ui/react';
import { useCartContext } from '../../Context/Context';

const Cart =({listaDeProducto}) => {    
    const {cartList, totalPrice} = useCartContext()
    console.log(cartList);
        return (
            // <HStack bg={listaDeProducto.color} color={listaDeProducto.colorLetra}>
            //     {
            //         cartList.map(prod =>
            //             <HStack key={prod.id}>
            //                 <Image src={listaDeProducto.image}/>
            //                 <Text>{listaDeProducto.producto}</Text>
            //                 <Text>Cantidad: {listaDeProducto.quantity}</Text>
            //             </HStack>
            //                     )
            //     }
            //     <Text>Total: {totalPrice()}</Text>
            // </HStack>
            <HStack><Text>Hola</Text></HStack>
                        
    )
}         
    


export {Cart}
{/* <Image src={listaDeProducto.image} alt="Cover"/>
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
*/}

