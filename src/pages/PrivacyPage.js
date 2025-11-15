import { Helmet } from "react-helmet-async";
import {
  Container,
  Box,
  Heading,
  Text,
  List,
  ListItem,
  VStack,
  Divider,
} from "@chakra-ui/react";

export const PrivacyPage = () => {
  return (
    <>
      <Helmet>
        <title>Політика конфіденційності | Адвокат Львів</title>
        <meta
          name="description"
          content="Політика конфіденційності адвоката Ірини Судомляк. Інформація про збір, використання та захист персональних даних."
        />
        <meta
          name="keywords"
          content="політика конфіденційності, захист даних, персональні дані, адвокат Львів"
        />
        <link
          rel="canonical"
          href="https://lawyer-help5.firebaseapp.com/privacy"
        />
        <meta
          property="og:title"
          content="Політика конфіденційності | Адвокат Львів"
        />
        <meta
          property="og:description"
          content="Політика конфіденційності та захист персональних даних."
        />
        <meta
          property="og:url"
          content="https://lawyer-help5.firebaseapp.com/privacy"
        />
      </Helmet>
      <Container
        as="section"
        maxW="100vw"
        centerContent
        py={[6, 8, 10]}
        px={[4, 6, 8]}
      >
        <Box
          w={["100%", "100%", "100%", "4xl", "6xl"]}
          maxW="100%"
          bg="white"
          boxShadow="xl"
          borderRadius="xl"
          p={[6, 8, 10]}
        >
          <VStack spacing={6} align="stretch">
            <Heading
              as="h1"
              size={["xl", "2xl"]}
              color="brand.200"
              textAlign="center"
              mb={4}
            >
              Політика конфіденційності
            </Heading>

            <Text fontSize={["sm", "md"]} color="gray.600" textAlign="center">
              Останнє оновлення: {new Date().toLocaleDateString("uk-UA")}
            </Text>

            <Divider borderColor="brand.300" />

            <Box>
              <Heading as="h2" size="lg" color="brand.200" mb={4}>
                1. Загальні положення
              </Heading>
              <Text fontSize={["md", "lg"]} color="brand.100" lineHeight="tall" mb={4}>
                Ця Політика конфіденційності описує, як ми збираємо, використовуємо та захищаємо
                персональні дані користувачів нашого веб-сайту. Ми зобов'язуємося захищати вашу
                конфіденційність та дотримуватися вимог законодавства України про захист
                персональних даних.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" color="brand.200" mb={4}>
                2. Збір персональних даних
              </Heading>
              <Text fontSize={["md", "lg"]} color="brand.100" lineHeight="tall" mb={4}>
                Ми можемо збирати наступні персональні дані:
              </Text>
              <List spacing={3} fontSize={["md", "lg"]} color="brand.100">
                <ListItem>
                  <Text as="strong" color="brand.200">
                    Контактна інформація:
                  </Text>{" "}
                  ім'я, номер телефону, електронна адреса, які ви надаєте при заповненні форми
                  зворотного зв'язку
                </ListItem>
                <ListItem>
                  <Text as="strong" color="brand.200">
                    Технічна інформація:
                  </Text>{" "}
                  IP-адреса, тип браузера, операційна система, час відвідування сайту
                </ListItem>
                <ListItem>
                  <Text as="strong" color="brand.200">
                    Cookies:
                  </Text>{" "}
                  ми використовуємо cookies для покращення роботи сайту та аналізу відвідуваності
                </ListItem>
              </List>
            </Box>

            <Box>
              <Heading as="h2" size="lg" color="brand.200" mb={4}>
                3. Використання персональних даних
              </Heading>
              <Text fontSize={["md", "lg"]} color="brand.100" lineHeight="tall" mb={4}>
                Ваші персональні дані використовуються для:
              </Text>
              <List spacing={3} fontSize={["md", "lg"]} color="brand.100">
                <ListItem>Зв'язку з вами щодо ваших запитів та консультацій</ListItem>
                <ListItem>Покращення якості наданих послуг</ListItem>
                <ListItem>Відправки важливих повідомлень та оновлень</ListItem>
                <ListItem>Аналізу використання сайту для його покращення</ListItem>
              </List>
            </Box>

            <Box>
              <Heading as="h2" size="lg" color="brand.200" mb={4}>
                4. Захист персональних даних
              </Heading>
              <Text fontSize={["md", "lg"]} color="brand.100" lineHeight="tall" mb={4}>
                Ми вживаємо всіх необхідних заходів для захисту ваших персональних даних від
                несанкціонованого доступу, зміни, розкриття або знищення. Ваші дані зберігаються
                безпечно та не передаються третім особам без вашої згоди, за винятком випадків,
                передбачених законодавством.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" color="brand.200" mb={4}>
                5. Cookies
              </Heading>
              <Text fontSize={["md", "lg"]} color="brand.100" lineHeight="tall" mb={4}>
                Наш веб-сайт використовує cookies для:
              </Text>
              <List spacing={3} fontSize={["md", "lg"]} color="brand.100">
                <ListItem>Забезпечення коректної роботи сайту</ListItem>
                <ListItem>Збереження ваших налаштувань та переваг</ListItem>
                <ListItem>Аналізу відвідуваності та покращення користувацького досвіду</ListItem>
              </List>
              <Text fontSize={["md", "lg"]} color="brand.100" lineHeight="tall" mt={4}>
                Ви можете налаштувати свій браузер для відмови від cookies, але це може вплинути
                на функціональність сайту.
              </Text>
            </Box>

            <Box>
              <Heading as="h2" size="lg" color="brand.200" mb={4}>
                6. Ваші права
              </Heading>
              <Text fontSize={["md", "lg"]} color="brand.100" lineHeight="tall" mb={4}>
                Ви маєте право:
              </Text>
              <List spacing={3} fontSize={["md", "lg"]} color="brand.100">
                <ListItem>Отримати доступ до своїх персональних даних</ListItem>
                <ListItem>Вимагати виправлення неточних даних</ListItem>
                <ListItem>Вимагати видалення ваших персональних даних</ListItem>
                <ListItem>Відкликати згоду на обробку персональних даних</ListItem>
                <ListItem>Обмежити обробку ваших персональних даних</ListItem>
              </List>
            </Box>

            <Box>
              <Heading as="h2" size="lg" color="brand.200" mb={4}>
                7. Контактна інформація
              </Heading>
              <Text fontSize={["md", "lg"]} color="brand.100" lineHeight="tall" mb={4}>
                Якщо у вас є питання щодо цієї Політики конфіденційності або ви хочете
                реалізувати свої права, будь ласка, зв'яжіться з нами:
              </Text>
              <List spacing={2} fontSize={["md", "lg"]} color="brand.100">
                <ListItem>
                  <Text as="strong" color="brand.200">
                    Телефон:
                  </Text>{" "}
                  +380 93 335 41 54
                </ListItem>
                <ListItem>
                  <Text as="strong" color="brand.200">
                    Email:
                  </Text>{" "}
                  sodo4ka@gmail.com
                </ListItem>
              </List>
            </Box>

            <Box>
              <Heading as="h2" size="lg" color="brand.200" mb={4}>
                8. Зміни до Політики конфіденційності
              </Heading>
              <Text fontSize={["md", "lg"]} color="brand.100" lineHeight="tall">
                Ми залишаємо за собою право вносити зміни до цієї Політики конфіденційності.
                Всі зміни будуть опубліковані на цій сторінці з оновленням дати "Останнє
                оновлення". Рекомендуємо періодично переглядати цю сторінку для ознайомлення з
                актуальною інформацією.
              </Text>
            </Box>

            <Divider borderColor="brand.300" mt={6} />

            <Text
              fontSize={["sm", "md"]}
              color="gray.600"
              textAlign="center"
              fontStyle="italic"
            >
              Використовуючи наш веб-сайт, ви погоджуєтесь з цією Політикою конфіденційності.
            </Text>
          </VStack>
        </Box>
      </Container>
    </>
  );
};

