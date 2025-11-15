import { Container, Box, Text, Image, Flex, Heading, Divider, List, ListItem, Icon } from "@chakra-ui/react"
import { Helmet } from "react-helmet-async"
import { RiSmartphoneFill, RiMailFill } from "react-icons/ri"
import { FaViber } from "react-icons/fa"
import { RiTelegramFill } from "react-icons/ri"

export const Personal = () => {
    return (<>
        <Helmet>
            <title>Про адвоката | Ірина Судомляк | Адвокат Львів</title>
            <meta name="description" content="Адвокат Ірина Судомляк - кваліфікована юридична допомога у Львові. Досвід у вирішенні сімейних, спадкових, житлових та інших правових питань. Професійний адвокат з багаторічним досвідом." />
            <meta name="keywords" content="Ірина Судомляк, адвокат Львів, про адвоката, досвід адвоката" />
            <link rel="canonical" href="https://lawyer-help5.firebaseapp.com/lawyer" />
            <meta property="og:title" content="Про адвоката | Ірина Судомляк | Адвокат Львів" />
            <meta property="og:description" content="Адвокат Ірина Судомляк - кваліфікована юридична допомога у Львові." />
            <meta property="og:url" content="https://lawyer-help5.firebaseapp.com/lawyer" />
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "Ірина Судомляк",
                "jobTitle": "Адвокат",
                "description": "Кваліфікований адвокат у Львові",
                "telephone": "+380933354154",
                "email": "sodo4ka@gmail.com",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Львів",
                  "addressCountry": "UA"
                }
              })}
            </script>
        </Helmet>
        <Container as='section' maxW='100vw' centerContent py={[4, 6, 8]}>
            <Box w={['100%', 'sm', 'md', '4xl', '6xl']} gridGap={[4, 6]} p={[4, 6]}>
                <Heading 
                    as='h1' 
                    size={['xl', '2xl']} 
                    mb={[6, 8]} 
                    color='brand.200' 
                    textAlign='center'
                    fontWeight="700">
                    Про адвоката
                </Heading>
                
                <Box
                    bg="white"
                    boxShadow="xl"
                    borderRadius="xl"
                    p={[4, 6, 8]}
                    mb={6}
                    transition="all 0.3s ease"
                    _hover={{
                        boxShadow: "2xl",
                    }}>
                    <Flex 
                        flexDirection={['column', 'column', 'row']} 
                        gridGap={[4, 6]} 
                        alignItems={['center', 'center', 'flex-start']}
                        mb={6}
                    >
                        <Image 
                            src='https://live.staticflickr.com/65535/52695054909_3821cea83a_z.jpg'
                            alt='Адвокат Ірина Судомляк'
                            boxSize={['200px', '250px', '300px']}
                            borderRadius='xl'
                            objectFit='cover'
                            boxShadow="lg"
                        />
                        <Box flex='1'>
                            <Heading as='h2' size={['lg', 'xl']} mb={3} color='brand.200'>
                                Ірина Судомляк
                            </Heading>
                            <Text fontSize={['md', 'lg']} mb={4} color='brand.100' fontWeight="500">
                                Кваліфікований адвокат з досвідом надання юридичних послуг у різних сферах права.
                            </Text>
                            <Text fontSize={['sm', 'md']} mb={4} color='brand.100' lineHeight="tall">
                                Надаю професійну юридичну допомогу у вирішенні складних правових питань. 
                                Моя мета - захистити ваші права та інтереси, надавши якісні юридичні послуги 
                                з урахуванням індивідуальних потреб кожного клієнта.
                            </Text>
                        </Box>
                    </Flex>
                </Box>

                <Box
                    bg="white"
                    boxShadow="xl"
                    borderRadius="xl"
                    p={[4, 6]}
                    mb={6}
                    transition="all 0.3s ease"
                    _hover={{
                        boxShadow: "2xl",
                        transform: "translateY(-4px)",
                    }}>
                    <Heading as='h3' size={['md', 'lg']} mb={4} color='brand.200'>
                        Спеціалізація
                    </Heading>
                    <List spacing={3}>
                        <ListItem>
                            <Text fontSize={['sm', 'md']} color='brand.100'>
                                • Сімейні спори (розірвання шлюбу, аліменти)
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Text fontSize={['sm', 'md']} color='brand.100'>• Спадкові спори</Text>
                        </ListItem>
                        <ListItem>
                            <Text fontSize={['sm', 'md']} color='brand.100'>• Житлові спори</Text>
                        </ListItem>
                        <ListItem>
                            <Text fontSize={['sm', 'md']} color='brand.100'>• Земельні спори</Text>
                        </ListItem>
                        <ListItem>
                            <Text fontSize={['sm', 'md']} color='brand.100'>• Договірні правовідносини</Text>
                        </ListItem>
                        <ListItem>
                            <Text fontSize={['sm', 'md']} color='brand.100'>• Адміністративні правопорушення</Text>
                        </ListItem>
                        <ListItem>
                            <Text fontSize={['sm', 'md']} color='brand.100'>
                                • Представництво інтересів потерпілих у кримінальному провадженні
                            </Text>
                        </ListItem>
                    </List>
                </Box>

                <Box
                    bg="white"
                    boxShadow="xl"
                    borderRadius="xl"
                    p={[4, 6]}
                    mb={6}
                    transition="all 0.3s ease"
                    _hover={{
                        boxShadow: "2xl",
                        transform: "translateY(-4px)",
                    }}>
                    <Heading as='h3' size={['md', 'lg']} mb={4} color='brand.200'>
                        Переваги співпраці
                    </Heading>
                    <List spacing={3}>
                        <ListItem>
                            <Text fontSize={['sm', 'md']} color='brand.100'>
                                • Індивідуальний підхід до кожної справи
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Text fontSize={['sm', 'md']} color='brand.100'>
                                • Досвід роботи у різних сферах права
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Text fontSize={['sm', 'md']} color='brand.100'>
                                • Професійне представництво інтересів у суді
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Text fontSize={['sm', 'md']} color='brand.100'>
                                • Конфіденційність та надійність
                            </Text>
                        </ListItem>
                        <ListItem>
                            <Text fontSize={['sm', 'md']} color='brand.100'>
                                • Доступні ціни на юридичні послуги
                            </Text>
                        </ListItem>
                    </List>
                </Box>

                <Box
                    bg="white"
                    boxShadow="xl"
                    borderRadius="xl"
                    p={[4, 6]}
                    transition="all 0.3s ease"
                    _hover={{
                        boxShadow: "2xl",
                        transform: "translateY(-4px)",
                    }}>
                    <Heading as='h3' size={['md', 'lg']} mb={4} color='brand.200'>
                        Контакти
                    </Heading>
                    <List spacing={3}>
                        <ListItem>
                            <Box
                                as='a'
                                href='tel:+380933354154'
                                display="flex"
                                alignItems='center'
                                gridGap={3}
                                p={3}
                                borderRadius="lg"
                                transition="all 0.3s ease"
                                _hover={{
                                    bg: "brand.50",
                                    transform: "translateX(8px)",
                                }}>
                                <Icon as={RiSmartphoneFill} boxSize={5} color='brand.400' />
                                <Text fontSize={['sm', 'md']} color='brand.100' fontWeight="500">
                                    +380 93 335 41 54
                                </Text>
                            </Box>
                        </ListItem>
                        <ListItem>
                            <Box
                                as='a'
                                href='mailto:sodo4ka@gmail.com'
                                display="flex"
                                alignItems='center'
                                gridGap={3}
                                p={3}
                                borderRadius="lg"
                                transition="all 0.3s ease"
                                _hover={{
                                    bg: "brand.50",
                                    transform: "translateX(8px)",
                                }}>
                                <Icon as={RiMailFill} boxSize={5} color='brand.400' />
                                <Text fontSize={['sm', 'md']} color='brand.100' fontWeight="500">
                                    sodo4ka@gmail.com
                                </Text>
                            </Box>
                        </ListItem>
                        <ListItem>
                            <Box
                                as='a'
                                href='https://t.me/+380933354154'
                                target='_blank'
                                display="flex"
                                alignItems='center'
                                gridGap={3}
                                p={3}
                                borderRadius="lg"
                                transition="all 0.3s ease"
                                _hover={{
                                    bg: "brand.50",
                                    transform: "translateX(8px)",
                                }}>
                                <Icon as={RiTelegramFill} boxSize={5} color='brand.400' />
                                <Text fontSize={['sm', 'md']} color='brand.100' fontWeight="500">
                                    Telegram
                                </Text>
                            </Box>
                        </ListItem>
                        <ListItem>
                            <Box
                                as='a'
                                href='viber://chat/?number=%2B380933354154'
                                display="flex"
                                alignItems='center'
                                gridGap={3}
                                p={3}
                                borderRadius="lg"
                                transition="all 0.3s ease"
                                _hover={{
                                    bg: "brand.50",
                                    transform: "translateX(8px)",
                                }}>
                                <Icon as={FaViber} boxSize={5} color='brand.400' />
                                <Text fontSize={['sm', 'md']} color='brand.100' fontWeight="500">
                                    Viber
                                </Text>
                            </Box>
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </Container>
    </>)
}