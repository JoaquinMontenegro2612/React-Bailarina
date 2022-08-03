import { HStack, Spacer, Link, Image, Heading, Wrap, WrapItem } from '@chakra-ui/react'
import logo from '../../assets/logo.jpg'


const Navbar = () => {
    return(
    <HStack> 
        <HStack direction='between'>
        <Image boxSize='100px'  borderRadius='full' src={logo} alt="logo" />
        <Heading size='lg' fontSize='50px'>
            Bailarina
        </Heading>
            <Link>Sobre Nosotros</Link>
            <Link>Catalogo</Link>
            <Link>Contacto</Link>
        </HStack>
    </HStack>
    )
}
export{ Navbar }