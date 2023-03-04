/** @format */

import {  ListItem, List, Icon } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "@chakra-ui/react";
import {BsFillArrowRightCircleFill, BsFillArrowDownCircleFill} from 'react-icons/bs'


export const SideBar = () => {
  const [isLaptop] = useMediaQuery("(min-width: 992px)")
  //const firsLink = document.querySelector('.first').cla

  const icon = isLaptop ? <Icon as={BsFillArrowRightCircleFill} /> : <Icon as={BsFillArrowDownCircleFill} />

  const activeStyle = {
    fontWeight: 'bold',
  };
  return (
    <>
      <List >
        <ListItem>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to='divorce' end>
            Розірвання шлюбу
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to='alimony'>
            Аліменти під ключ
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to='inheritance'>
            Спадщина
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to='criminal'>
            Захист потерпілого
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to='landing'>
            Земельні спори
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to='housing'>
            Житлові спори
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to='contract'>
            Договірні правовідносини
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to='admin'>
            Адміністративні правопорушення
          </NavLink>
        </ListItem>
      </List>
      {icon}
    </>
  );
};


