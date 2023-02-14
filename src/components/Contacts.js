import { Container, Box, Icon, List, ListItem } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { RiSmartphoneLine, RiInstagramFill, RiFacebookBoxFill, RiTelegramFill, RiMailFill } from 'react-icons/ri'
import { FaViber } from 'react-icons/fa'

export const Contacts = () => {
    return (<>
        <Container as='section' maxW='100vw' centerContent>
            <Box w={['xs', 'sm', 'md', '4xl', '6xl']} gridGap={[2, 4, 6]} p={[2, 4, 6]}>
                <h2>Контакти:</h2>
                <p>посилання на інсту, фб, телегу, вайбер, номер тел</p>
                <Box color='brand.200'>
                    <List>
                        <ListItem>
                            <a valiant='pagelink' href='tel:+380933354154'><Icon boxSize={6} as={RiSmartphoneLine}></Icon>подзвонити</a>
                        </ListItem>
                    <Icon boxSize={6} as={RiInstagramFill}></Icon>
                    <Icon boxSize={6} as={RiFacebookBoxFill}></Icon>
                    <Icon boxSize={6} as={RiTelegramFill}></Icon>
                    <Icon boxSize={6} as={RiMailFill}></Icon>
                        <Icon boxSize={6} as={FaViber}></Icon>
                    </List>
                </Box>


                <Link to='+380933354154'>+380933354154</Link>
            </Box>
        </Container>

    </>)
}