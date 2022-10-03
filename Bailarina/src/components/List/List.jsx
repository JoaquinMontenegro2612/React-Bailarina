import { Box, HStack, VStack } from "@chakra-ui/react"
import { memo } from "react"

const List = ({ usuarios }) => {
    return (
        <VStack>
            {usuarios.map(usuario => (
                <HStack key={usuario.nombre}>
                    <Box>{usuario.nombre} {usuario.apellido}</Box>
                </HStack>
            ))}
        </VStack>
    )

}
export default memo(List)