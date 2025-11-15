import { Container, Box, Text, Image, Heading} from "@chakra-ui/react"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Flex,
} from '@chakra-ui/react'
import { HiMinus, HiPlus } from 'react-icons/hi'
import { servList } from "./ServList"
import { Helmet } from 'react-helmet-async'
import { Victim } from "./articles/Victim"
import { Divorce } from "./articles/Divorce"
import { Admin } from "./articles/Admin"
import { Inheritance } from "./articles/Inheritance"
import { Housing } from "./articles/Housing"
import { Landing } from "./articles/Landing"
import { Contract } from "./articles/Contract"


export const Services = () => {
    return (<>
        <Container as='section' maxW='100vw' centerContent py={[4, 6, 8]}>
            <Box w={['100%', 'sm', 'md', '4xl', '6xl']} gridGap={[4, 6]} p={[4, 6]}>
                <Heading 
                    as='h1' 
                    size={['xl', '2xl']}
                    mb={6}
                    color='brand.200'
                    textAlign="center"
                    fontWeight="700">
                    Послуги адвоката
                </Heading>
                <Accordion allowMultiple>
                    <Item arr={servList} />
                </Accordion>
            </Box>
        </Container>
    </>)
}

const Item = ({ arr }) => {
    return (<>
        {arr.map(({ name, description, img }) => {
            return (
                <AccordionItem 
                    key={name}
                    border="none"
                    mb={4}
                    bg="white"
                    borderRadius="xl"
                    boxShadow="md"
                    overflow="hidden"
                    transition="all 0.3s ease"
                    _hover={{
                        boxShadow: "xl",
                    }}>
                    {({ isExpanded }) => (
                        <>
                            <h2>
                                <AccordionButton
                                    py={4}
                                    px={6}
                                    bg={isExpanded ? "brand.200" : "white"}
                                    color={isExpanded ? "white" : "brand.200"}
                                    _hover={{
                                        bg: isExpanded ? "brand.300" : "brand.50",
                                    }}
                                    transition="all 0.3s ease">
                                    <Box 
                                        as="span"
                                        display='flex'
                                        textAlign='left'
                                        alignItems='center'
                                        flex='1'
                                        fontWeight="600"
                                        fontSize={['sm', 'md']}>
                                        {isExpanded ? (
                                            <AccordionIcon as={HiMinus} fontSize='20px' mr={[2, 4]} />
                                        ) : (
                                            <AccordionIcon as={HiPlus} fontSize='20px' mr={[2, 4]} />
                                        )}
                                        <Text>{name}</Text>
                                    </Box>
                                </AccordionButton>
                            </h2>
                            <AccordionPanel pb={6} px={6} pt={4}>
                                <Helmet>
                                    <meta name="description" content={description} />
                                </Helmet>
                                <Flex 
                                    flexDirection={['column', 'column', 'row']}
                                    alignItems={['center', 'center', 'flex-start']}
                                    gridGap={[4, 6]}>
                                    <Image 
                                        src={img} 
                                        alt={name} 
                                        boxSize={['120px', '150px', '180px']}
                                        borderRadius="lg"
                                        objectFit="cover"
                                        boxShadow="md"
                                    />
                                    <Box flex="1">
                                        {name === 'Сімейні спори' && <Divorce />}
                                        {name === 'Представництво інтересів потерпілих у кримінальному провадженні' && <Victim />}
                                        {name === 'Справи про адміністративні правопорушення' && <Admin />}
                                        {name === 'Спадкові спори' && <Inheritance />}
                                        {name === 'Житлові спори' && <Housing />}
                                        {name === 'Земельні спори' && <Landing />}
                                        {name === 'Договірні правовідносини' && <Contract />}
                                    </Box>
                                </Flex>
                            </AccordionPanel>
                        </>
                    )}
                </AccordionItem>
            );
        })}
    </>)
}


