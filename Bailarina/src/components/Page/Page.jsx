import { HStack, Stack, Text } from "@chakra-ui/react"

const Page = (props) => {
    return (
        <HStack className="page">
            <Stack className="page__header">
                <Text as='h3'>{props.titulo}</Text>
                <Text as='h3'>{props.subtitulo}</Text>
            </Stack>
            <Stack className="page__content">
                {props.children}
            </Stack>
        </HStack>
    )
}

export default Page