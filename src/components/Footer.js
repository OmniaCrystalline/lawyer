import { NavLink } from "react-router-dom"
import { 
  Container, 
  Box, 
  Flex, 
  Text, 
  Heading, 
  Icon, 
  Divider,
  Link,
  List,
  ListItem,
  Grid,
  GridItem
} from "@chakra-ui/react"
import { motion } from "framer-motion"
import { VscLaw } from 'react-icons/vsc'
import {
  RiSmartphoneFill,
  RiInstagramFill,
  RiFacebookBoxFill,
  RiTelegramFill,
  RiMailFill,
} from "react-icons/ri"
import { FaViber } from "react-icons/fa"

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      as={motion.footer}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      bgGradient="linear(to-r, brand.200, brand.300)"
      color='white'
      mt="auto"
      pt={[6, 8, 10]}
      pb={[4, 6]}
      boxShadow="0 -4px 6px rgba(0, 0, 0, 0.1)">
      <Container maxW='100vw' centerContent>
        <Box w={["100%", "100%", "100%", "4xl", "6xl"]} px={[4, 6, 8]} maxW="100%">
          <Grid
            templateColumns={[
              "1fr",
              "1fr",
              "repeat(2, 1fr)",
              "repeat(2, 1fr)",
              "repeat(4, 1fr)"
            ]}
            gap={[4, 5, 6, 8]}
            mb={6}>
            
            {/* About Section */}
            <GridItem>
              <Flex alignItems="center" gridGap={2} mb={4}>
                <Icon as={VscLaw} boxSize={6} color="brand.400" />
                <Heading as='h3' size='md' color='white'>
                  Юридична допомога
                </Heading>
              </Flex>
              <Text fontSize={["sm", "md"]} lineHeight="tall" color="whiteAlpha.900">
                Професійна юридична допомога у вирішенні складних правових питань. 
                Захищаємо ваші права та інтереси з урахуванням індивідуальних потреб кожного клієнта.
              </Text>
            </GridItem>

            {/* Navigation Section */}
            <GridItem>
              <Heading as='h3' size='md' mb={4} color='white'>
                Навігація
              </Heading>
              <List spacing={2}>
                <ListItem>
                  <Box
                    as={NavLink}
                    to='/'
                    display="inline-block"
                    fontSize={["sm", "md"]}
                    color="whiteAlpha.900"
                    transition="all 0.3s ease"
                    _hover={{
                      color: "brand.400",
                      transform: "translateX(4px)",
                    }}>
                    Головна
                  </Box>
                </ListItem>
                <ListItem>
                  <Box
                    as={NavLink}
                    to='/services/divorce'
                    display="inline-block"
                    fontSize={["sm", "md"]}
                    color="whiteAlpha.900"
                    transition="all 0.3s ease"
                    _hover={{
                      color: "brand.400",
                      transform: "translateX(4px)",
                    }}>
                    Послуги
                  </Box>
                </ListItem>
                <ListItem>
                  <Box
                    as={NavLink}
                    to='/contacts'
                    display="inline-block"
                    fontSize={["sm", "md"]}
                    color="whiteAlpha.900"
                    transition="all 0.3s ease"
                    _hover={{
                      color: "brand.400",
                      transform: "translateX(4px)",
                    }}>
                    Контакти
                  </Box>
                </ListItem>
                <ListItem>
                  <Box
                    as={NavLink}
                    to='/lawyer'
                    display="inline-block"
                    fontSize={["sm", "md"]}
                    color="whiteAlpha.900"
                    transition="all 0.3s ease"
                    _hover={{
                      color: "brand.400",
                      transform: "translateX(4px)",
                    }}>
                    Про юриста
                  </Box>
                </ListItem>
              </List>
            </GridItem>

            {/* Contacts Section */}
            <GridItem>
              <Heading as='h3' size='md' mb={4} color='white'>
                Контакти
              </Heading>
              <List spacing={3}>
                <ListItem>
                  <Flex alignItems="center" gridGap={2}>
                    <Icon as={RiSmartphoneFill} boxSize={5} color="brand.400" />
                    <Link
                      href='tel:+380933354154'
                      fontSize={["sm", "md"]}
                      color="whiteAlpha.900"
                      transition="all 0.3s ease"
                      _hover={{
                        color: "brand.400",
                      }}>
                      +380 93 335 41 54
                    </Link>
                  </Flex>
                </ListItem>
                <ListItem>
                  <Flex alignItems="center" gridGap={2}>
                    <Icon as={RiMailFill} boxSize={5} color="brand.400" />
                    <Link
                      href='mailto:sodo4ka@gmail.com'
                      fontSize={["sm", "md"]}
                      color="whiteAlpha.900"
                      transition="all 0.3s ease"
                      _hover={{
                        color: "brand.400",
                      }}>
                      sodo4ka@gmail.com
                    </Link>
                  </Flex>
                </ListItem>
                <ListItem>
                  <Flex alignItems="center" gridGap={2}>
                    <Icon as={RiTelegramFill} boxSize={5} color="brand.400" />
                    <Link
                      href='https://t.me/+380933354154'
                      target='_blank'
                      rel="noopener noreferrer"
                      fontSize={["sm", "md"]}
                      color="whiteAlpha.900"
                      transition="all 0.3s ease"
                      _hover={{
                        color: "brand.400",
                      }}>
                      Telegram
                    </Link>
                  </Flex>
                </ListItem>
                <ListItem>
                  <Flex alignItems="center" gridGap={2}>
                    <Icon as={FaViber} boxSize={5} color="brand.400" />
                    <Link
                      href='viber://chat/?number=%2B380933354154'
                      fontSize={["sm", "md"]}
                      color="whiteAlpha.900"
                      transition="all 0.3s ease"
                      _hover={{
                        color: "brand.400",
                      }}>
                      Viber
                    </Link>
                  </Flex>
                </ListItem>
              </List>
            </GridItem>

            {/* Social Media Section */}
            <GridItem>
              <Heading as='h3' size='md' mb={4} color='white'>
                Соціальні мережі
              </Heading>
              <List spacing={3}>
                <ListItem>
                  <Flex alignItems="center" gridGap={2}>
                    <Icon as={RiFacebookBoxFill} boxSize={5} color="brand.400" />
                    <Link
                      href='https://www.facebook.com/sodo4ka'
                      target='_blank'
                      rel="noopener noreferrer"
                      fontSize={["sm", "md"]}
                      color="whiteAlpha.900"
                      transition="all 0.3s ease"
                      _hover={{
                        color: "brand.400",
                      }}>
                      Facebook
                    </Link>
                  </Flex>
                </ListItem>
                <ListItem>
                  <Flex alignItems="center" gridGap={2}>
                    <Icon as={RiInstagramFill} boxSize={5} color="brand.400" />
                    <Link
                      href='https://instagram.com/0933354154_adwokat_i.s?igshid=YmMyMTA2M2Y='
                      target='_blank'
                      rel="noopener noreferrer"
                      fontSize={["sm", "md"]}
                      color="whiteAlpha.900"
                      transition="all 0.3s ease"
                      _hover={{
                        color: "brand.400",
                      }}>
                      Instagram
                    </Link>
                  </Flex>
                </ListItem>
              </List>
            </GridItem>
          </Grid>

          <Divider borderColor="whiteAlpha.300" mb={4} />

          {/* Copyright */}
          <Box textAlign="center">
            <Text fontSize={["xs", "sm"]} color="whiteAlpha.800">
              © {currentYear} Юридична допомога. Всі права захищені.
            </Text>
            <Text fontSize={["xs", "sm"]} color="whiteAlpha.700" mt={2}>
              Адвокат Ірина Судомляк
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

