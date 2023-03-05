import { NavLink } from "react-router-dom"
import { VscLaw } from 'react-icons/vsc'
import { Container, Flex, Icon } from "@chakra-ui/react"




export const Header = () => {
    const activeStyle = {
        textDecoration: "underline",
    };
    return (
      <Container as='header' maxW='100vw' centerContent>
        <Flex
          w={["xs", "sm", "md", "4xl", "6xl"]}
          gridGap={[2, 4, 6]}
          p={[2, 4, 6]}
          color='brand.400'>
          <NavLink
            to='/'
            style={({ isActive }) => (isActive ? activeStyle : undefined)}>
            <Icon as={VscLaw} color='brand.300' boxSize={6} /> Головна
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to='/services/divorce'>
            Послуги
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to='/contacts'>
            Контакти
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to='/lawyer'>
            Юрист
          </NavLink>
        </Flex>
      </Container>
    );
}