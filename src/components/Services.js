import { Container, Box, Text, Image } from "@chakra-ui/react"
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import { HiMinus, HiPlus } from 'react-icons/hi'

export const Services = () => {
    return (<>
        <Container as='section' maxW='100vw' centerContent>
            <Box w={['xs', 'sm', 'md', '4xl', '6xl']} gridGap={[2, 4, 6]} p={[2, 4, 6]}>
                <Text as='h1'>Послуги адвоката</Text>
                <Accordion allowMultiple>
                    <Item />
                    <Item />
                    <Item />
                    <Item />                   
                </Accordion>
            </Box>
        </Container>
    </>)
}

const Item = () => {
    return (<>
        <AccordionItem>
            {({ isExpanded }) => (
                <>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Розлучення
                            </Box>
                            {isExpanded ? (
                                <AccordionIcon as={HiMinus} fontSize='12px' />
                            ) : (
                                <AccordionIcon as={HiPlus} fontSize='12px' />
                            )}
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        <Image boxSize='100px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDvKO_EsWOOM7XKM6DAW4uWBd4ihp_za2FqWSP4GatdVtNNz1cliQDCTWqDHgKpwg4PeM&usqp=CAU'/>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </AccordionPanel>
                </>
            )}
        </AccordionItem>
    </>)
}