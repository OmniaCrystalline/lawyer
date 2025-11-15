/** @format */

import {
  Container,
  Box,
  Icon,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import {
  RiSmartphoneFill,
  RiInstagramFill,
  RiFacebookBoxFill,
  RiTelegramFill,
  RiMailFill,
} from "react-icons/ri";
import { FaViber } from "react-icons/fa";

export const Contacts = () => {
  return (
    <>
      <Container as='section' maxW='100vw' centerContent py={[4, 6, 8]}>
        <Box
          w={["100%", "sm", "md", "4xl", "6xl"]}
          gridGap={[4, 6]}>
          <Text 
            as='h2' 
            fontSize={["xl", "2xl", "3xl"]}
            fontWeight="700"
            m={[4, 6]} 
            textAlign='center'
            color='brand.200'>
            Зв'яжіться з нами для отримання юридичної допомоги
          </Text>
          <Box
            position="relative"
            borderRadius="xl"
            overflow="hidden"
            boxShadow="2xl"
            minH={["500px", "600px"]}
            bgImage="url('https://live.staticflickr.com/65535/52727717251_d1d02038da_z.jpg')"
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat">
            <Box
              position="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              bgGradient="linear(to-b, brand.200, brand.300)"
              opacity={0.85}
            />
            <Box
              position="relative"
              zIndex={1}
              p={[4, 6, 8]}
              color='white'>
              <List
                w='100%'
                display='grid'
                gridGap={[3, 4, 6]}
                maxW="600px"
                mx="auto">
                <ListItem>
                  <Box
                    as="a"
                    href='tel:+380933354154'
                    display="flex"
                    alignItems="center"
                    gridGap={3}
                    p={4}
                    bg="whiteAlpha.200"
                    borderRadius="lg"
                    backdropFilter="blur(10px)"
                    transition="all 0.3s ease"
                    _hover={{
                      bg: "whiteAlpha.300",
                      transform: "translateX(8px)",
                    }}>
                    <Icon boxSize={6} as={RiSmartphoneFill} />
                    <Text fontSize={["md", "lg"]} fontWeight="500">+380 93 335 41 54</Text>
                  </Box>
                </ListItem>
                <ListItem>
                  <Box
                    as="a"
                    href='mailto:sodo4ka@gmail.com'
                    display="flex"
                    alignItems="center"
                    gridGap={3}
                    p={4}
                    bg="whiteAlpha.200"
                    borderRadius="lg"
                    backdropFilter="blur(10px)"
                    transition="all 0.3s ease"
                    _hover={{
                      bg: "whiteAlpha.300",
                      transform: "translateX(8px)",
                    }}>
                    <Icon boxSize={6} as={RiMailFill} />
                    <Text fontSize={["md", "lg"]} fontWeight="500">sodo4ka@gmail.com</Text>
                  </Box>
                </ListItem>
                <ListItem>
                  <Box
                    as="a"
                    href='https://t.me/+380933354154'
                    target='_blank'
                    display="flex"
                    alignItems="center"
                    gridGap={3}
                    p={4}
                    bg="whiteAlpha.200"
                    borderRadius="lg"
                    backdropFilter="blur(10px)"
                    transition="all 0.3s ease"
                    _hover={{
                      bg: "whiteAlpha.300",
                      transform: "translateX(8px)",
                    }}>
                    <Icon boxSize={6} as={RiTelegramFill} />
                    <Text fontSize={["md", "lg"]} fontWeight="500">Telegram</Text>
                  </Box>
                </ListItem>
                <ListItem>
                  <Box
                    as="a"
                    href='https://www.facebook.com/sodo4ka'
                    target='_blank'
                    rel="noopener noreferrer"
                    display="flex"
                    alignItems="center"
                    gridGap={3}
                    p={4}
                    bg="whiteAlpha.200"
                    borderRadius="lg"
                    backdropFilter="blur(10px)"
                    transition="all 0.3s ease"
                    _hover={{
                      bg: "whiteAlpha.300",
                      transform: "translateX(8px)",
                    }}>
                    <Icon boxSize={6} as={RiFacebookBoxFill} />
                    <Text fontSize={["md", "lg"]} fontWeight="500">Ірина Судомляк</Text>
                  </Box>
                </ListItem>
                <ListItem>
                  <Box
                    as="a"
                    href='viber://chat/?number=%2B380933354154'
                    display="flex"
                    alignItems="center"
                    gridGap={3}
                    p={4}
                    bg="whiteAlpha.200"
                    borderRadius="lg"
                    backdropFilter="blur(10px)"
                    transition="all 0.3s ease"
                    _hover={{
                      bg: "whiteAlpha.300",
                      transform: "translateX(8px)",
                    }}>
                    <Icon boxSize={6} as={FaViber} />
                    <Text fontSize={["md", "lg"]} fontWeight="500">Viber</Text>
                  </Box>
                </ListItem>
                <ListItem>
                  <Box
                    as="a"
                    href='https://instagram.com/0933354154_adwokat_i.s?igshid=YmMyMTA2M2Y='
                    target='_blank'
                    rel="noopener noreferrer"
                    display="flex"
                    alignItems="center"
                    gridGap={3}
                    p={4}
                    bg="whiteAlpha.200"
                    borderRadius="lg"
                    backdropFilter="blur(10px)"
                    transition="all 0.3s ease"
                    _hover={{
                      bg: "whiteAlpha.300",
                      transform: "translateX(8px)",
                    }}>
                    <Icon boxSize={6} as={RiInstagramFill} />
                    <Text fontSize={["md", "lg"]} fontWeight="500">Instagram</Text>
                  </Box>
                </ListItem>
              </List>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

