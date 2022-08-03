import { Heading } from "@chakra-ui/react";

const ItemListContainer = ({greeting}) => {
return (
    <Heading size='lg' fontSize='50px'>
        {greeting}
</Heading>    
)
}

export default ItemListContainer
