import { HStack,VStack, Button, Text, Image, Heading, Box,Center} from "@chakra-ui/react"
import {NavLink} from 'react-router-dom'
import {ItemCount} from '../ItemCount/index'
const Item = ({productos}) => {
    
    return(
        <HStack id="productContainer" bg={productos.color}>
            <Box mx='45px'>
            <Heading id="titulo" >{productos.producto}</Heading>
            </Box>
            <Image id="imagenes" src={productos.image} alt="imagen"></Image>
                <VStack>
                <Text id="detalle" as='i' fontWeight='semibold' fontSize='xl' mx={2}>{productos.detalle}</Text>
                <Text id="descripcion" as='i' fontWeight='semibold' fontSize='xl' mx={2} textAlign='center'>{productos.descripcion}</Text>
                </VStack>
                <VStack>
                <Text id="precio" fontWeight='semibold' fontSize='xl'> ${productos.precio}</Text>
                <br/>
                <ItemCount/>
                <br />  
                <Button id="detalle" colorScheme='transparent' variant='outline' size='lg' >
                    <NavLink to={`productos/${productos.id}`}>Ver detalle
                    </NavLink>
                </Button>
                </VStack>
        </HStack>
        
    )
}

export default Item
