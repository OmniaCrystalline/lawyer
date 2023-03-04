//import { Helmet } from "react-helmet-async"
import { OrderedList, Text, ListItem, Box } from "@chakra-ui/react"

export const Divorce = () => {
    return (
      <Box as='section'>
        <Text as='h6'>Розірвання шлюбу під ключ:</Text>
        <OrderedList>
          <ListItem>позовна заява про розірвання шлюбу</ListItem>
          <ListItem>оплата судового збору без черг</ListItem>
          <ListItem>подання позовної заяви до суду</ListItem>
          <ListItem>
            повернення витрат на адвоката та судового збору після ухвалення
            рішення судом
          </ListItem>
          <ListItem>отримання копії рішення</ListItem>
          <br />
          <p>
            Від Вас зустріч для підписання договору з адвокатом та надання копій
            відповідних документів(оригінал свідоцтва про шлюб).
          </p>
        </OrderedList>
        <br />
      </Box>
    );
}

export const Alimony = () => {
    return (
      <>
        <Text as='h6'>Аліменти під ключ:</Text>
        <OrderedList>
          <ListItem>про видачу судового наказу або позовна заява</ListItem>
          <ListItem>
            участь у судових засіданнях за необхідності (за виключенням
            наказного провадження)
          </ListItem>
          <ListItem>подання заяви або позовної заяви до суду</ListItem>
          <ListItem>
            повернення витрат на адвоката після ухвалення судового рішення
          </ListItem>
          <ListItem>
            отримання копії судового рішення та виконавчого листа.
          </ListItem>
        </OrderedList>
      </>
    );
}