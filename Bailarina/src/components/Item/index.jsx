import { VStack, Button, Text, Image,Link, Heading } from "@chakra-ui/react"
import {NavLink} from 'react-router-dom'
const Item = ({productos}) => {
    return(
        
        <VStack id="productContainer">

            <Heading id="titulo">{productos.producto}</Heading>
            <Image id="imagenes" src={productos.image} alt="imagen">
                </Image>
                <Text id="detalle">{productos.detalle}</Text>
                <Text id="descripcion">{productos.descripcion}</Text>
                <Text id="precio"> ${productos.precio} </Text>
                <Button id="detalle">
                    <NavLink to={`productos/${productos.id}`}>Ver detalle
                    </NavLink>
                </Button>
        
        </VStack>
        
    )
}

export default Item