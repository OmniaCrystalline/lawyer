import { Container, Box, Icon, List, ListItem, Text, Image, Flex } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { RiSmartphoneFill, RiInstagramFill, RiFacebookBoxFill, RiTelegramFill, RiMailFill } from 'react-icons/ri'
import { FaViber } from 'react-icons/fa'

export const Contacts = () => {

    return (<>
        <Container as='section' maxW='100vw' centerContent>
            <Box w={['xs', 'sm', 'md', '4xl', '6xl']} gridGap={[2, 4, 6]}  >
                <Text as='h2' m={[2, 4]} textAlign='center'>Зв'яжіться з нами для отримання юридичної допомоги любим доступним методом:</Text>
                <Flex flexDirection={['column', 'column','column','row']} >
                    <Image src="https://live.staticflickr.com/65535/52697320692_1e7203ebc3_z.jpg" alt="згода" w={['100%', '100%', '100%', '75%']} ></Image>
                    <Box color='brand.200'>
                        <List p={[2, 4]} display="grid" gridGap={[2, 4]}>
                            <ListItem >
                                <Link to='tel:+380933354154'><Icon boxSize={6} as={RiSmartphoneFill} ></Icon>+380933354154</Link>
                            </ListItem>
                            <ListItem >
                                <MailTo />
                            </ListItem>
                            <ListItem >
                                <Telegram />
                            </ListItem>
                            <ListItem >
                                <Link to='https://www.facebook.com/sodo4ka' target='_blank'><Icon boxSize={6} as={RiFacebookBoxFill} mr="5px"></Icon> Ірина Судомляк</Link>
                            </ListItem>
                            <ListItem >
                                <Viber />
                            </ListItem>
                            <ListItem >
                                <Link to='https://instagram.com/0933354154_adwokat_i.s?igshid=YmMyMTA2M2Y=' target="_blank" ><Icon mr="5px" boxSize={6} as={RiInstagramFill}></Icon> інстаграм</Link>
                            </ListItem>
                        </List>
                    </Box>
                </Flex>
            </Box>
        </Container>

    </>)
}

const MailTo = () => {
    return (<a href='mailto:sodo4ka@gmail.com' ><Icon boxSize={6} as={RiMailFill} mr="5px"></Icon> напишіть листа</a>)
}

const Viber = () => {
    return (<a href="viber://chat/?number=%2B380933354154" ><Icon as={FaViber} boxSize={6} mr="5px"></Icon> напишіть в вайбері</a>
    )
}

const Telegram = () => {
    return (<a href='https://t.me/+380933354154' ><Icon as={RiTelegramFill} boxSize={6} mr="5px"></Icon><Text> зв'яжіться через телеграм</Text></a>)
}