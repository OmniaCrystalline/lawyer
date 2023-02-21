import { Container, Box, Text, Image, OrderedList, ListItem } from "@chakra-ui/react"
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
                                <Box>{description === 'Сімейні спори' ? <Divorce /> : description}</Box>
                            </Flex>
                        </AccordionPanel>
                    </>
                )}
            </AccordionItem>
        })}
    </>)
}

const Divorce = () => {
    return (<>
        <Text as='h6'>Розірвання шлюбу під ключ:</Text>
        <OrderedList>
            <ListItem>позовна заява про розірвання шлюбу</ListItem>
            <ListItem>оплата судового збору без черг</ListItem>
            <ListItem>подання позовної заяви до суду</ListItem>
            <ListItem>повернення витрат на адвоката та судового збору після ухвалення рішення судом</ListItem>
            <ListItem>отримання копії рішення</ListItem>
            <br />
            <p>Від Вас зустріч для підписання договору з адвокатом та надання копій відповідних документів(оригінал свідоцтва про шлюб).</p>
        </OrderedList>
        <br />
        <Text as='h6'>Аліменти під ключ:</Text>
        <OrderedList>
            <ListItem>про видачу судового наказу або позовна заява</ListItem>
            <ListItem>участь у судових засіданнях за необхідності (за виключенням наказного провадження)</ListItem>
            <ListItem>подання заяви або позовної заяви до суду</ListItem>
            <ListItem>повернення витрат на адвоката  після ухвалення судового рішення</ListItem>
            <ListItem>отримання копії судового рішення та виконавчого листа.</ListItem>
        </OrderedList>
    </>)
}