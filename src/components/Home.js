import {
    Container, Box,
    Image,
    Flex,
    Text
} from "@chakra-ui/react"
import { qoutes } from "../components/qotes"
import { useState } from "react"
import s from './Style.module.css';
import { useEffect } from "react";

export const Home = () => {
    const [index, setindex] = useState('')

    useEffect(() => {
        const textChange = setInterval(() => {
            const idx = Math.floor(Math.random() * (5 - 0)) + 0
            setindex(qoutes[idx])
        }, 10000);

        return () => clearTimeout(textChange);
    }, [])

    return (<>
        <Container as='section' maxW='100vw' centerContent>
            <Box w={['xs', 'sm', 'md', '4xl', '6xl']} gridGap={[2, 4, 6]}
            >
                <Flex flexDirection={['column', 'column', 'column', 'row']} pos='relative'>
                    <Image
                        src='https://live.staticflickr.com/65535/52695054909_3821cea83a_z.jpg'
                        w={['320px', '320px', '448px']}
                        h={['412px', '412px', '577px']}
                        loading="lazy"
                    ></Image>
                    <Box p={[2, 4]} pos='absolute' top='0' left='0' color='whiteAlpha.800' w='320px' >
                        <Text as='i' className={s.change} fontSize={['xs', 'xs', 'sm']}>{index}</Text>
                    </Box>
                    <Box as="article" w={['320px', '320px', '448px', '100%']} p={[2, 4]}>
                        <Text color="brand.200" as='i' >
                            В житті кожної людини може наступити такий момент, коли вона буде потребувати кваліфікованої допомоги юриста, адже кожен може стикнутись з проблемою, коли потрібна допомога спеціаліста, обізнаного в законодавстві і здатного допомогти в питаннях, тому так важливо щоб Ваші права захищав досвідченний юрист. Звернувшись до нас ви зможете отримати вичерпну консультацію і супровід правозахисника.
                        </Text>
                    </Box>
                </Flex>
            </Box>
        </Container>
    </>)
}
