import { Container, Box, Text, Image} from "@chakra-ui/react"
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
        <Container as='section' maxW='100vw' centerContent>
            <Box w={['xs', 'sm', 'md', '4xl', '6xl']} gridGap={[2, 4, 6]} p={[2, 4, 6]}>
                <Text as='h1' p={[2, 4]}>Послуги адвоката</Text>
                <Accordion allowMultiple >
                    <Item arr={servList} />
                </Accordion>
            </Box>
        </Container>
    </>)
}

const Item = ({ arr }) => {
    return (<>
        {arr.map(({ name, description, img }) => {
            return <AccordionItem key={name}>
                {({ isExpanded }) => (
                    <>
                        <h2>
                            <AccordionButton>
                                <Box as="span"
                                    display='flex'
                                    textAlign='left'
                                    alignItems='center'
                                    color='brand.200'
                                    
                                >
                                    {isExpanded ? (
                                    <AccordionIcon as={HiMinus} fontSize='12px' mr={[2, 4]} />
                                ) : (
                                    <AccordionIcon as={HiPlus} fontSize='12px' mr={[2, 4]} />
                                    )}
                                    <Text fontWeight='bold'>{name}</Text>
                                </Box>

                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <Helmet>
                                <meta name="description" content={description} />
                            </Helmet>
                            <Flex flexDirection={['column', 'column', 'column', 'row']}
                                alignItems={['center', 'center', 'center', 'flex-start']}
                                gridGap={[2,4]}
                            >
                                <Image src={img} alt={name} boxSize='150px' />
                                {<Box>{name === 'Сімейні спори' && <Divorce />}</Box>}
                                {<Box>{name === 'Представництво інтересів потерпілих у кримінальному провадженні' && (<Victim />)}</Box>}
                                {<Box>{name === 'Справи про адміністративні правопорушення' && (<Admin />)} </Box>}
                                {<Box>{name === 'Спадкові спори' && (<Inheritance />)}</Box>}
                                {<Box>{name === 'Житлові спори' && (<Housing />)}</Box>}
                                {<Box>{name === 'Земельні спори' && (<Landing />)}</Box>}
                                {<Box>{name === 'Договірні правовідносини' && (<Contract />)}</Box>}
                            </Flex>
                        </AccordionPanel>
                    </>
                )}
            </AccordionItem>
        })}
    </>)
}


