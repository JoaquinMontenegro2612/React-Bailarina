import { HStack, Image, Heading, Spacer} from '@chakra-ui/react'
import logo from '../../assets/logo.jpg'
import CartWidget from './CartWidget'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return(
    <HStack> 
        <NavLink to='/'>
            <img src={logo} alt='logo' width={"100px"}/>
        </NavLink>
        <Spacer/>
        <HStack>
            <NavLink to='categoria/directo'>Directos</NavLink>
            <NavLink to='categoria/shacked'>Shacked
            </NavLink>
            <NavLink to='categoria/batido'>
                Batidos
            </NavLink>
                <CartWidget/>
        </HStack>
    </HStack>
    )
}
export{ Navbar }