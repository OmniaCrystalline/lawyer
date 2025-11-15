/** @format */

import {
  Container,
  Box,
  Image,
  Flex,
  Text,
  OrderedList,
  ListItem,
  Heading,
  Button,
  Grid,
  GridItem,
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { qoutes } from "../components/qotes";
import { useState } from "react";
import s from "./Style.module.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { servList } from "./ServList";
import {
  RiShieldCheckFill,
  RiTimeFill,
  RiMoneyDollarCircleFill,
  RiTeamFill,
} from "react-icons/ri";

export const Home = () => {
  const [index, setindex] = useState("");

  useEffect(() => {
    const textChange = setInterval(() => {
      const idx = Math.floor(Math.random() * (5 - 0)) + 0;
      setindex(qoutes[idx]);
    }, 10000);

    return () => clearTimeout(textChange);
  }, []);

  return (
    <>
      <Container
        as='section'
        maxW='100vw'
        centerContent
        py={[4, 6, 8]}
        px={[2, 4, 6]}
        pb={[8, 10, 12]}>
        <Box
          w={["100%", "100%", "100%", "4xl", "6xl"]}
          maxW='100%'
          gridGap={[4, 6, 8]}>
          {/* Hero Section */}
          <Flex
            flexDirection={["column", "column", "column", "row"]}
            mb={[6, 8, 10]}
            gridGap={[4, 6]}
            alignItems={["center", "center", "center", "stretch"]}
            as={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}>
            <Box
              position='relative'
              borderRadius='xl'
              overflow='hidden'
              boxShadow='2xl'
              flexShrink={0}
              w={["100%", "100%", "100%", "320px", "448px"]}
              maxW={["100%", "100%", "100%", "320px", "448px"]}
              alignSelf={["auto", "auto", "auto", "stretch"]}
              display='flex'
              as={motion.div}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}>
              <Image
                src='/femida.jpg'
                alt='femida'
                loading='lazy'
                w='100%'
                h='100%'
                objectFit='cover'
              />
              <Box
                p={[3, 4]}
                pos='absolute'
                top='0'
                left='0'
                right='0'
                bgGradient='linear(to-b, blackAlpha.800, transparent)'
                color='white'>
                <Text as='i' fontSize={["sm", "md"]} className={s.change}>
                  {index}
                </Text>
              </Box>
            </Box>

            <Box
              flex='1'
              bg='white'
              boxShadow='xl'
              borderRadius='xl'
              p={[4, 5, 6]}
              w={["100%", "100%", "100%", "auto"]}
              as={motion.div}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              _hover={{
                transform: "translateY(-4px)",
                boxShadow: "2xl",
              }}>
              <Heading as='h1' size={["lg", "xl"]} mb={4} color='brand.200'>
                Професійна юридична допомога
              </Heading>
              <Text
                fontSize={["md", "lg"]}
                mb={4}
                color='brand.100'
                lineHeight='tall'>
                Юридичні проблеми можуть виникати в різних ситуаціях, як-от
                суперечки з іншими сторонами, контракти, ділові операції,
                тілесні ушкодження, кримінальні звинувачення, сімейні справи
                тощо. Вони можуть бути складними, напруженими та дорогими, якщо
                їх не розглядати належним чином.
              </Text>
              <Text
                fontSize={["md", "lg"]}
                mb={4}
                color='brand.100'
                lineHeight='tall'>
                Юрист – це професіонал, який має знання та досвід, щоб надати
                вам поради щодо ваших законних прав та обов'язків; представляти
                вас у переговорах або судових розглядах; захистити свої інтереси
                та активи.
              </Text>
              <Box
                bgGradient='linear(to-r, brand.400, brand.600)'
                color='white'
                p={4}
                borderRadius='lg'
                mt={4}>
                <Text as='i' fontSize={["sm", "md"]} fontWeight='500'>
                  Якщо ви залучені або зіткнулися з будь-якою правовою
                  проблемою, не зволікайте, якомога швидше зв'яжіться з юристом.
                  Юрист може надати цінну допомогу та рекомендації, які можуть
                  вплинути на успішне вирішення вашої правової проблеми.
                </Text>
              </Box>
            </Box>
          </Flex>

          {/* Benefits Section */}
          <Box
            bg='white'
            boxShadow='xl'
            borderRadius='xl'
            p={[4, 6, 8]}
            mt={[4, 6]}
            as={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            _hover={{
              boxShadow: "2xl",
            }}>
            <Heading
              as='h2'
              size={["lg", "xl"]}
              mb={6}
              color='brand.200'
              textAlign='center'>
              Переваги звернення до юриста
            </Heading>
            <OrderedList spacing={4} color='brand.100' fontSize={["md", "lg"]}>
              <ListItem>
                <Text fontWeight='600' mb={1} color='brand.200'>
                  Розуміння закону
                </Text>
                Допомогти вам зрозуміти закон і його застосування до вашої
                ситуації. Закон складний і постійно змінюється.
              </ListItem>
              <ListItem>
                <Text fontWeight='600' mb={1} color='brand.200'>
                  Професійне консультування
                </Text>
                Пояснити відповідні закони та нормативні акти, які стосуються
                вашої справи; визначити юридичні питання та пов'язані ризики; і
                консультувати вас щодо ваших варіантів і стратегій на майбутнє.
              </ListItem>
              <ListItem>
                <Text fontWeight='600' mb={1} color='brand.200'>
                  Вирішення суперечок
                </Text>
                Допомогти вам уникнути або вирішити суперечки. Спори можуть
                виникати через непорозуміння, розбіжності або порушення
                контракту між сторонами.
              </ListItem>
              <ListItem>
                <Text fontWeight='600' mb={1} color='brand.200'>
                  Представництво інтересів
                </Text>
                Допомогти вам спілкуватися з іншими сторонами; домовитися про
                справедливе та розумне врегулювання; проекти або перегляд
                контрактів чи угод; посередництво або арбітраж у суперечках; або
                подавати або захищати позови, якщо це необхідно.
              </ListItem>
              <ListItem>
                <Text fontWeight='600' mb={1} color='brand.200'>
                  Економія часу та грошей
                </Text>
                На вирішення юридичних питань може знадобитися багато часу та
                грошей, якщо їх не вирішувати ефективно та результативно. Юрист
                може допомогти вам уникнути непотрібних затримок або витрат,
                взявши вашу справу професійно та швидко.
              </ListItem>
              <ListItem>
                <Text fontWeight='600' mb={1} color='brand.200'>
                  Досягнення цілей
                </Text>
                Юридичні проблеми можуть мати значний вплив на ваше особисте чи
                професійне життя. Юрист може допомогти вам досягти ваших цілей,
                переслідуючи ваші інтереси та цілі; відстоювання ваших прав та
                інтересів.
              </ListItem>
            </OrderedList>
          </Box>

          {/* Services Preview Section */}
          <Box
            bg='white'
            boxShadow='xl'
            borderRadius='xl'
            p={[4, 6, 8]}
            mt={[6, 8]}
            transition='all 0.3s ease'
            _hover={{
              boxShadow: "2xl",
            }}>
            <Heading
              as='h2'
              size={["lg", "xl"]}
              mb={6}
              color='brand.200'
              textAlign='center'>
              Наші послуги
            </Heading>
            <Grid
              templateColumns={[
                "1fr",
                "1fr",
                "repeat(2, 1fr)",
                "repeat(2, 1fr)",
                "repeat(3, 1fr)",
              ]}
              gap={[4, 5, 6]}
              mb={6}>
              {servList.slice(0, 6).map((service, idx) => (
                <GridItem key={service.name}>
                  <Box
                    as={motion(Link)}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    whileHover={{ y: -8, transition: { duration: 0.2 } }}
                    to='/services/divorce'
                    display='flex'
                    flexDirection='column'
                    p={5}
                    bg='white'
                    borderRadius='xl'
                    boxShadow='md'
                    _hover={{
                      boxShadow: "xl",
                    }}
                    h='100%'
                    border='1px solid'
                    borderColor='gray.200'>
                    <Image
                      src={service.img}
                      alt={service.name}
                      w='100%'
                      h='120px'
                      borderRadius='lg'
                      mb={4}
                      objectFit='cover'
                    />
                    <Heading
                      as='h3'
                      size='sm'
                      mb={2}
                      color='brand.200'
                      fontWeight='600'>
                      {service.name}
                    </Heading>
                    <Text
                      fontSize='sm'
                      color='brand.100'
                      noOfLines={3}
                      lineHeight='tall'>
                      {service.description}
                    </Text>
                  </Box>
                </GridItem>
              ))}
            </Grid>
            <Flex justifyContent='center'>
              <Button
                as={Link}
                to='/services/divorce'
                bgGradient='linear(to-r, brand.400, brand.600)'
                color='white'
                size='lg'
                px={8}
                py={6}
                borderRadius='lg'
                fontWeight='600'
                transition='all 0.3s ease'
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "xl",
                }}>
                Всі послуги
              </Button>
            </Flex>
          </Box>

          {/* Why Choose Us Section */}
          <Box
            bgGradient='linear(to-r, brand.200, brand.300)'
            borderRadius='xl'
            p={[4, 6, 8]}
            mt={[6, 8]}
            color='white'>
            <Heading
              as='h2'
              size={["lg", "xl"]}
              mb={6}
              textAlign='center'
              color='white'>
              Чому обирають нас
            </Heading>
            <Grid
              templateColumns={[
                "1fr",
                "1fr",
                "repeat(2, 1fr)",
                "repeat(2, 1fr)",
                "repeat(2, 1fr)",
              ]}
              gap={[4, 5, 6, 8]}>
              {[
                {
                  icon: RiShieldCheckFill,
                  title: "Професійність",
                  text: "Кваліфікований адвокат з досвідом роботи у різних сферах права",
                },
                {
                  icon: RiTimeFill,
                  title: "Швидкість",
                  text: "Швидке реагування на ваші запити та ефективне вирішення справ",
                },
                {
                  icon: RiMoneyDollarCircleFill,
                  title: "Доступні ціни",
                  text: "Справедливі та прозорі ціни на всі юридичні послуги",
                },
                {
                  icon: RiTeamFill,
                  title: "Індивідуальний підхід",
                  text: "Кожна справа розглядається з урахуванням індивідуальних потреб клієнта",
                },
              ].map((item, idx) => (
                <Flex
                  key={idx}
                  as={motion.div}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.15 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  flexDirection='column'
                  alignItems='center'
                  textAlign='center'
                  p={4}
                  bg='whiteAlpha.100'
                  borderRadius='lg'
                  backdropFilter='blur(10px)'>
                  <Icon as={item.icon} boxSize={12} color='brand.400' mb={3} />
                  <Heading as='h3' size='md' mb={2} color='white'>
                    {item.title}
                  </Heading>
                  <Text fontSize={["sm", "md"]} color='whiteAlpha.900'>
                    {item.text}
                  </Text>
                </Flex>
              ))}
            </Grid>
          </Box>

          {/* CTA Section */}
          <Box
            bg='white'
            boxShadow='xl'
            borderRadius='xl'
            p={[6, 8, 10]}
            mt={[6, 8]}
            textAlign='center'
            position='relative'
            overflow='hidden'
            as={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            _before={{
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              bgGradient: "linear(to-r, brand.400, brand.600)",
              opacity: 0.05,
              zIndex: 0,
            }}>
            <Box position='relative' zIndex={1}>
              <Heading
                as='h2'
                size={["lg", "xl", "2xl"]}
                mb={4}
                color='brand.200'>
                Потрібна юридична допомога?
              </Heading>
              <Text
                fontSize={["md", "lg"]}
                mb={6}
                color='brand.100'
                maxW='600px'
                mx='auto'>
                Зв'яжіться з нами сьогодні та отримайте професійну консультацію.
                Ми допоможемо вам вирішити будь-які правові питання.
              </Text>
              <Flex
                flexDirection={["column", "row"]}
                gap={4}
                justifyContent='center'
                alignItems='center'>
                <Button
                  as={Link}
                  to='/contacts'
                  bgGradient='linear(to-r, brand.400, brand.600)'
                  color='white'
                  size='lg'
                  px={8}
                  py={6}
                  borderRadius='lg'
                  fontWeight='600'
                  transition='all 0.3s ease'
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "xl",
                  }}>
                  Зв'язатися з нами
                </Button>
                <Button
                  as={Link}
                  to='/services/divorce'
                  variant='outline'
                  borderColor='brand.200'
                  color='brand.200'
                  size='lg'
                  px={8}
                  py={6}
                  borderRadius='lg'
                  fontWeight='600'
                  transition='all 0.3s ease'
                  _hover={{
                    bg: "brand.200",
                    color: "white",
                    transform: "translateY(-2px)",
                  }}>
                  Переглянути послуги
                </Button>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};
