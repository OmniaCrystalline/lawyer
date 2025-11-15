/** @format */

import { ListItem, List, Icon, Box, Text } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import { useMediaQuery } from "@chakra-ui/react";
import {BsFillArrowRightCircleFill, BsFillArrowDownCircleFill} from 'react-icons/bs'

export const SideBar = () => {
  const [isLaptop] = useMediaQuery("(min-width: 992px)")
  const location = useLocation();

  const icon = isLaptop ? <Icon as={BsFillArrowRightCircleFill} color="brand.400" /> : <Icon as={BsFillArrowDownCircleFill} color="brand.400" />

  const links = [
    { to: 'divorce', end: true, label: 'Розірвання шлюбу' },
    { to: 'alimony', label: 'Аліменти під ключ' },
    { to: 'inheritance', label: 'Спадщина' },
    { to: 'criminal', label: 'Захист потерпілого' },
    { to: 'landing', label: 'Земельні спори' },
    { to: 'housing', label: 'Житлові спори' },
    { to: 'contract', label: 'Договірні правовідносини' },
    { to: 'admin', label: 'Адміністративні правопорушення' },
  ];

  return (
    <>
      <List spacing={2}>
        {links.map(({ to, end, label }) => {
          const isActive = end 
            ? location.pathname === `/services/${to}`
            : location.pathname.startsWith(`/services/${to}`);
          
          return (
            <ListItem key={to}>
              <Box
                as={NavLink}
                to={to}
                end={end}
                display="block"
                px={4}
                py={3}
                borderRadius="lg"
                mb={2}
                bg={isActive ? "brand.400" : "whiteAlpha.100"}
                color={isActive ? "white" : "whiteAlpha.900"}
                fontWeight={isActive ? "700" : "500"}
                transition="all 0.3s ease"
                _hover={{
                  bg: isActive ? "brand.400" : "whiteAlpha.200",
                  transform: "translateX(8px)",
                }}
                position="relative"
                _after={isActive ? {
                  content: '""',
                  position: "absolute",
                  left: "0",
                  top: "0",
                  bottom: "0",
                  width: "4px",
                  bg: "white",
                  borderRadius: "0 4px 4px 0",
                } : {}}>
                <Text fontSize={["sm", "md"]}>{label}</Text>
              </Box>
            </ListItem>
          );
        })}
      </List>
      <Box mt={4} textAlign="center">
        {icon}
      </Box>
    </>
  );
};


