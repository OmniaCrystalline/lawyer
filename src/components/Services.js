import { Container, Box, Text, Image } from "@chakra-ui/react"
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


export const Services = () => {
    return (<>
        <Container as='section' maxW='100vw' centerContent>
            <Box w={['xs', 'sm', 'md', '4xl', '6xl']} gridGap={[2, 4, 6]} p={[2, 4, 6]}>
                <Text as='h1'>Послуги адвоката</Text>
                <Accordion allowMultiple >
                    <Item arr={servList} />
                </Accordion>
            </Box>
        </Container>
    </>)
}

const Item = ({ arr }) => {
    return (<>
        {arr.map(({ name, discription, img }) => <AccordionItem key={name}>
            {({ isExpanded }) => (
                <>
                    <h2>
                        <AccordionButton>
                            <Box as="span"
                                flex='1'
                                textAlign='left'
                            >{isExpanded ? (
                                <AccordionIcon as={HiMinus} fontSize='12px' mr={[2, 4]} />
                            ) : (
                                <AccordionIcon as={HiPlus} fontSize='12px' mr={[2, 4]} />
                            )}
                                {name}
                            </Box>

                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Helmet>
                            <meta name="description" content={discription} />
                        </Helmet>
                        <Flex flexDirection={['column', 'column', 'column', 'row']} align='center'>
                            <Image src={img} alt={name} />
                            <Text p={[2, 4]}>{discription}</Text>
                        </Flex>

                    </AccordionPanel>
                </>
            )}
        </AccordionItem>)}
    </>)
}