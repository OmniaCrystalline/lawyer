import { Container, Box } from "@chakra-ui/react"

export const Personal = () => {
    return (<>
        <Container as='section' maxW='100vw' centerContent>
            <Box w={['xs', 'sm', 'md', '4xl', '6xl']} gridGap={[2, 4, 6]} p={[2, 4, 6]}>
                про себе освіта досвід фото
            </Box>
        </Container>
    </>)
}