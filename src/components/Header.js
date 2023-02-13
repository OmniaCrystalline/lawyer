import { NavLink } from "react-router-dom"
import { VscLaw } from 'react-icons/vsc'
import { Container, Flex, Icon } from "@chakra-ui/react"


export const Header = () => {
    return (<Container as='header' maxW='100vw' centerContent>
        <Flex w={['xs','sm', 'md', '4xl', '6xl']} gridGap={[2, 4, 6]} p={[2, 4, 6]} alignItems='center'>
            <Icon as={VscLaw} color='brand.100' boxSize={6} />
            <NavLink to='/'>Головна</NavLink>
            <NavLink to='/services'>Послуги</NavLink>
            <NavLink to='/contacts'>Контакти</NavLink>
        </Flex>
    </Container>)
}