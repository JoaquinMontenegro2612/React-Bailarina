import { HStack, Image, Heading, Spacer, Box} from '@chakra-ui/react'
import logo from '../../assets/logo.jpg'
import CartWidget from './CartWidget'
import {NavLink} from 'react-router-dom'
import { useCartContext } from "../../Context/Context";


const Navbar = () => {
    const { cantidad } = useCartContext()
    return(
    <HStack bg='whiteAlpha.500' h='80px'> 
        <Box ml={50}>
        <NavLink to='/'>
            <Image src={logo} alt='logo' width={"80px"} rounded='30px'/>
        </NavLink>
        </Box>
        <Spacer/>
        <Heading>Bienvenidos a Bailarina Cocteleria</Heading>
        <Spacer/>
            <HStack w='300px' >
            <NavLink to='categoria/directo'>Directos</NavLink>
            <NavLink to='categoria/shacked'>Shacked</NavLink>
            <NavLink to='categoria/batido'>Batidos</NavLink>
            <NavLink to='Cart'><CartWidget />{cantidad}</NavLink>
            </HStack>        
    </HStack>
    )
}
export{ Navbar }