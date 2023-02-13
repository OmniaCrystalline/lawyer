import { Container, Box, Image, Flex, Text } from "@chakra-ui/react"
import { LoremIpsum } from "react-lorem-ipsum"
export const Home = () => {
    return (<>
        <Container as='section' maxW='100vw' centerContent>
            <Box w={['xs', 'sm', 'md', '4xl', '6xl']} gridGap={[2, 4, 6]} p={[2, 4, 6]}>
                <h2>Про себе</h2>
                <Text>маєш всесвітній досвід, фото</Text>
                <a href='https://colorhunt.co/'>кольори вибрати тут</a>
                <Flex flexDirection={['column', 'column', 'column', 'row']}>
                    <Image boxSize='300px' objectFit='cover'
                        ml={[0, 'auto']} mr={[0, 'auto']}
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0rZjiIVcxTlZhifaZH9ekkVdgNEBITcqScA&usqp=CAU'></Image>
                    <Box>
                        <Text p={2}><LoremIpsum /></Text>
                        <Text p={2}><LoremIpsum /></Text>
                    </Box>
                </Flex>
            </Box>
        </Container>
    </>)
}