import { Box, Image, Badge, Text, Stack, HStack, Button, useColorMode, FormControl, FormLabel,Select} from "@chakra-ui/react"
import Boomerang from '../../assets/Boomerang.png'
// import ItemCount  from '../ItemCount/index'
const ItemDetail = ({ listaDeProducto }) => {
    const { imagen, producto, precio, stock, descripcion, initial}= listaDeProducto
    const {colorMode} = useColorMode();
    const bgColor ={light:'gray.200', dark:'gray.700'};
    const textColor ={light:'gray.500', dark:'gray.100'};

    return(
        <HStack bg='blue.500'>
            <Box
            w='400px'
            rounded='20px'
            overflow='hidden'
            boxShadow='sm'
            bg={bgColor[colorMode]}
            mx={500}
            my={100}
            >
                <Image src={Boomerang} alt="Cover"/>
                <Box p={5}>
                        <Stack isInline align='baseline' >
                            <Badge variant='solid' variantcolor='teal' rounded='full' px={2}>
                            No Se Que Poner
                            </Badge>
                                <Badge variant='solid' variantcolor='teal' rounded='full' px={2}>
                                Estoy a punto de llorar 
                                </Badge>
                                    <Text textTransform='uppercase' fontSize='sm' color='gray.500' letterSpacing='wide'>lala </Text>
                        </Stack>
                        <Text as='h3' fontWeight='semibold' fontSize='xl' my={2} >jajaja</Text>
                            <Text fontWeight='light' fontSize='md'>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae suscipit, ad illo perspiciatis hic distinctio eos molestiae magnam delectus unde dolorum earum ipsa fugiat eveniet ex dolore excepturi illum totam.
                            </Text>
                        <Stack isInline justify='space-between'>
                            <Text fontWeight='bold' fontSize='lg'>
                                $200
                            </Text>
                                <Text fontWeight='semibold' fontSize='lg'>aca va a ir el stock variable
                                </Text>
                        </Stack>
                </Box>
                <Box textAlign='center'>
                <FormControl>
                    <FormLabel>Medidas de tu botella</FormLabel>
                    <Select placeholder='Selecciona la medida' bg='darkblue' color='yellow.500'>
                    <option>250 ML</option>
                    <option>500 ML</option>
                    </Select>
                </FormControl>
                <Button colorScheme='blue' size='lg' my='3' boxShadow='sm' _hover={{boxShadow:'md'}} _active={{boxShadow:'lg'}}>Comprar</Button>
                </Box>
            </Box>
        </HStack>

        
    )
}
export {ItemDetail}

