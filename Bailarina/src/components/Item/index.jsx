import { HStack,VStack, Button, Text, Image, Heading, Box,Spacer} from "@chakra-ui/react"
import {NavLink} from 'react-router-dom'

const Item = ({productos}) => {
    return(
        
        <HStack id="productContainer" bg={productos.color} color={productos.colorLetra}>
        <Spacer/>
            <Box mx='45px'>
            <Heading id="productos" >{productos.producto}</Heading>
            </Box>
            <Image id="imagenes" src={productos.imagen} alt="imagen"></Image>
                <VStack>
                <Text id="detalle" as='i' fontWeight='semibold' fontSize='xl' mx={2}>{productos.detalle}</Text>
                <Text id="descripcion" as='i' fontWeight='semibold' fontSize='xl' mx={2} textAlign='center'>{productos.descripcion}</Text>
                </VStack>
                <VStack>
                <Button id="detalle" colorScheme='transparent' variant='outline' size='lg' >
                    <NavLink to={`productos/${productos.id}`}>Ver detalle</NavLink>
                </Button>
                </VStack>
        </HStack>
        
    )
}

export default Item
