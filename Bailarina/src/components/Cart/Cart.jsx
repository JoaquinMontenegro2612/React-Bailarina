import { HStack,VStack, Box, Spacer, Text, Button,Image, ButtonGroup, Input,FormControl,FormLabel,Center} from "@chakra-ui/react"
import { NavLink } from "react-router-dom"
import { Usuario } from "../Cart/Usuario";
import { ImCross } from "react-icons/im"
import { useCartContext } from '../../Context/Context';

const Cart = () => {

    const { cartList, totalPrice, cleanCart, removeProduct } = useCartContext();

    if (cartList.length === 0) {
        return (
        <Center padding={70}>
            <VStack>
                <Text fontSize='3xl' border="15px" >You need a Coctail, Baby?</Text>
                <Image src='https://www.drinkinginamerica.com/wp-content/uploads/2016/11/giphy-12.gif' w="50vw" h='75vh'/>
                <NavLink to='/'><Button color='white' bg='blue'>Volver al Inicio</Button></NavLink>
            </VStack>
        </Center>
        )
    }


    return (
        <Box>
            {cartList.map(item =>
                <HStack key={item.id} border="2px" w="100vw" m={1} p={2} rounded="20px" >
                    <Box width="100px" marginRight={2}>
                        <Image src={item.imagen} />
                    </Box>
                    <HStack>
                        <Text>{item.nombre}</Text>
                        <br />
                        <Text>Cantidad : {item.cantidad}</Text>
                        <br />
                        <Text>Precio por unid.: ${item.precio}</Text>
                    </HStack>
<Spacer />
                    <Button color="blue.500" onClick={() => removeProduct(item.id)}><ImCross /></Button>
                </HStack>
            )}
            <Center >
            <Text fontWeight='bold' fontSize='xl'>Su total es: $ {totalPrice()}</Text>
            </Center>
<Spacer />
            <Box>
                <Button color="red.500" onClick={() => cleanCart()}>Vaciar carrito</Button>
            </Box>
            <Usuario/>
        </Box> 
    )
}

export { Cart }




















// import { Text,Box,HStack,Image,Badge,Stack,Tag,TagLeftIcon,TagLabel  } from '@chakra-ui/react';
// 
//  //bg={listaDeProducto.color} color={listaDeProducto.colorLetra}>
// const Cart =({listaDeProducto}) => {    
//     const {cartList, totalPrice,removeProduct, cleanCart} = useCartContext()

//         return (
//             <HStack spacing={4}>
//             {['sm', 'md', 'lg'].map((size) => (
//               <Tag size={size} key={size} variant='solid' colorScheme='teal'>
//                 Teal
//               </Tag>
//             ))}
//           </HStack>>)}
//             //{
//             // <HStack as={div}>
//             //     {cartList.map(prod =>
//             //             <HStack key={prod.id}>
//             //                 <Image src={listaDeProducto.image}/>
//             //                 <Text>{listaDeProducto.producto}</Text>
//             //                 <Text>Cantidad: {listaDeProducto.quantity}</Text>
//             //                 <Text>Total: {totalPrice()}</Text>
//             //             </HStack>)
                                
//             //     }
//             // </HStack>
            
//             // })   
        
    


// export {Cart}
// {/* <Image src={listaDeProducto.image} alt="Cover"/>
//                 <Box p={5}>
//                         <Badge align='baseline'>
//                         <Text textTransform='uppercase' fontSize='xl' color='gray.500' letterSpacing='wide'>Detalle del producto</Text>
//                         </Badge>
//                         <Text as='h3' fontWeight='semibold' fontSize='xl' my={2} >{listaDeProducto.detalle}</Text>
//                             <Text fontWeight='bold' fontSize='2xl'>{listaDeProducto.descripcion}</Text>
//                         <br/>
//                         <Stack justify='space-around'>
//                                 <Text fontWeight='semibold' fontSize='xl'>En este momento nos quedan {listaDeProducto.stock} en stock</Text>
//                         </Stack>
//                 </Box>
// */}

