import { NavLink } from "react-router-dom"
import { VscLaw } from 'react-icons/vsc'
import { Container, Flex, Icon } from "@chakra-ui/react"


export const Header = () => {
    return (<Container as='header' maxW='100vw' centerContent>
        <Flex w={['xs', 'sm', 'md', '4xl', '6xl']} gridGap={[2, 4, 6]} p={[2, 4, 6]} color='brand.400' alignItems='center'>
            <Icon as={VscLaw} color='brand.300' boxSize={6} />
            <NavLink to='/' variant='navi'>Головна</NavLink>
            <NavLink to='/services'>Послуги</NavLink>
            <NavLink to='/contacts'>Контакти</NavLink>
            <NavLink to='/lawyer'>Юрист</NavLink>
        </Flex>
    </Container>)
}