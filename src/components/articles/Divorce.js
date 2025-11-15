import { Helmet } from "react-helmet-async"
import { OrderedList, Text, ListItem, Box } from "@chakra-ui/react"

export const Divorce = () => {
    return (
      <>
        <Helmet>
          <title>Розірвання шлюбу під ключ | Адвокат Львів | Сімейні спори</title>
          <meta name="description" content="Розірвання шлюбу під ключ у Львові. Адвокат допоможе з позовною заявою, оплатою судового збору, поданням до суду. Професійна юридична допомога при розлученні." />
          <meta name="keywords" content="розірвання шлюбу, розлучення, сімейні спори, адвокат Львів, розірвання шлюбу під ключ" />
          <link rel="canonical" href="https://lawyer-help5.firebaseapp.com/services/divorce" />
          <meta property="og:title" content="Розірвання шлюбу під ключ | Адвокат Львів" />
          <meta property="og:description" content="Професійна допомога при розірванні шлюбу у Львові." />
        </Helmet>
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
      </>
    );
}

export const Alimony = () => {
    return (
      <>
        <Helmet>
          <title>Аліменти під ключ | Адвокат Львів | Судовий наказ</title>
          <meta name="description" content="Аліменти під ключ у Львові. Адвокат допоможе з судовим наказом, позовною заявою, участю у судових засіданнях. Отримання виконавчого листа." />
          <meta name="keywords" content="аліменти, аліменти під ключ, судовий наказ, адвокат Львів, стягнення аліментів" />
          <link rel="canonical" href="https://lawyer-help5.firebaseapp.com/services/alimony" />
          <meta property="og:title" content="Аліменти під ключ | Адвокат Львів" />
          <meta property="og:description" content="Професійна допомога зі стягнення аліментів у Львові." />
        </Helmet>
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