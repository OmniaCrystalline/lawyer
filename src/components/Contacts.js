import { Container, Box } from "@chakra-ui/react"
export const Contacts = () => {
    return (<>
        <Container as='section' maxW='100vw' centerContent>
            <Box w={['xs', 'sm', 'md', '4xl', '6xl']} gridGap={[2, 4, 6]} p={[2, 4, 6]}>
                <h2>Контакти</h2>
                <p>посилання на інсту, фб, телегу, вайбер, номер тел</p>
            </Box>
        </Container>
       
    </>)
}