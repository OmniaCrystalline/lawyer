import { Container, Box, Icon, List, ListItem } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { RiSmartphoneFill, RiInstagramFill, RiFacebookBoxFill, RiTelegramFill, RiMailFill } from 'react-icons/ri'
import { FaViber } from 'react-icons/fa'

export const Contacts = () => {
    return (<>
        <Container as='section' maxW='100vw' centerContent>
            <Box w={['xs', 'sm', 'md', '4xl', '6xl']} gridGap={[2, 4, 6]} p={[2, 4, 6]}>
                <h2>Зв'яжіться з нами для отримання юридичної допомоги любим доступним методом:</h2>
                <Box color='brand.200'>
                    <List>
                        <ListItem>
                            <Link to='tel:+380933354154'><Icon boxSize={6} as={RiSmartphoneFill}></Icon>+380933354154</Link>
                        </ListItem>
                        <ListItem>
                            <MailTo/>
                        </ListItem>
                        <ListItem>
                            <Link to=''><Icon boxSize={6} as={RiTelegramFill}></Icon></Link>
                        </ListItem>
                        <ListItem>
                            <Link to=''><Icon boxSize={6} as={RiFacebookBoxFill}></Icon></Link>
                        </ListItem>
                        <ListItem>
                            <ViberTo/>
                        </ListItem>
                        <ListItem>
                            <Link to=''><Icon boxSize={6} as={RiInstagramFill}></Icon></Link>
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </Container>

    </>)
}

const MailTo = () => {
    return (<a href='mailto:sodo4ka@gmail.com'><Icon boxSize={6} as={RiMailFill}></Icon> sodo4ka@gmail.com</a>)
}

const ViberTo = () => {
    return (<a href='viber://chat?number=+380933354154'><Icon boxSize={6} as={FaViber}></Icon> viber</a>
    )
}