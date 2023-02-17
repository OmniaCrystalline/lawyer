import {
    Container, Box,
    Image,
    Flex,
    Text
} from "@chakra-ui/react"
//import { LoremIpsum } from "react-lorem-ipsum"
import { qoutes } from "../components/qotes"
import { useState } from "react"
import s from './Style.module.css';

export const Home = () => {
    const [index, setindex] = useState(0)
    setInterval(() => {
        const idx = Math.floor(Math.random() * (5 - 0)) + 0
        setindex(idx)
    }, 10000);



    return (<>
        <Container as='section' maxW='100vw' centerContent>
            <Box w={['xs', 'sm', 'md', '4xl', '6xl']} gridGap={[2, 4, 6]}
            >
                <Flex flexDirection={['column', 'column', 'column', 'row']} pos='relative'>
                    <Image
                        src='https://live.staticflickr.com/65535/52695054909_3821cea83a_z.jpg'
                        w={['320px', '320px', '448px']}
                        h={['412px', '412px', '577px']}
                    ></Image>
                    <Box p={[2, 4]} pos='absolute' top='0' left='0' color='whiteAlpha.800' w='320px' >
                        <Text as='i' className={s.change} fontSize={['xs', 'xs', 'sm']}>{qoutes[index]}</Text>
                    </Box>
                    <Box>В житті кожної людини наступає такий момент, коли вона потребує кваліфікованої допомоги юриста і тд і тп</Box>
                </Flex>
            </Box>
        </Container>
    </>)
}
