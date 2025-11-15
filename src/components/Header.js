import { NavLink, useLocation } from "react-router-dom"
import { VscLaw } from 'react-icons/vsc'
import { RiSmartphoneFill } from 'react-icons/ri'
import { 
  Container, 
  Flex, 
  Icon, 
  Box, 
  Text, 
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast
} from "@chakra-ui/react"
import { useState } from "react"
import emailjs from '@emailjs/browser';

export const Header = () => {
    const location = useLocation();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        topic: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const toast = useToast();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Функція для перевірки обмеження запитів
    const checkRateLimit = () => {
        const RATE_LIMIT_KEY = 'form_submissions';
        const MAX_SUBMISSIONS = 2;
        const TIME_WINDOW = 60 * 60 * 1000; // 1 година в мілісекундах
        
        try {
            const stored = localStorage.getItem(RATE_LIMIT_KEY);
            const now = Date.now();
            
            if (stored) {
                const data = JSON.parse(stored);
                const { submissions, firstSubmissionTime } = data;
                
                // Якщо пройшло більше години, скидаємо лічильник
                if (now - firstSubmissionTime > TIME_WINDOW) {
                    const newData = {
                        submissions: 1,
                        firstSubmissionTime: now,
                        lastSubmissionTime: now
                    };
                    localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(newData));
                    return { allowed: true, remaining: MAX_SUBMISSIONS - 1 };
                }
                
                // Перевіряємо кількість відправок
                if (submissions >= MAX_SUBMISSIONS) {
                    const timeRemaining = Math.ceil((TIME_WINDOW - (now - firstSubmissionTime)) / (60 * 1000));
                    return { 
                        allowed: false, 
                        message: `Ви перевищили ліміт відправок. Спробуйте через ${timeRemaining} хвилин.` 
                    };
                }
                
                // Оновлюємо дані
                const newData = {
                    submissions: submissions + 1,
                    firstSubmissionTime: firstSubmissionTime,
                    lastSubmissionTime: now
                };
                localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(newData));
                return { allowed: true, remaining: MAX_SUBMISSIONS - (submissions + 1) };
            } else {
                // Перша відправка
                const newData = {
                    submissions: 1,
                    firstSubmissionTime: now,
                    lastSubmissionTime: now
                };
                localStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(newData));
                return { allowed: true, remaining: MAX_SUBMISSIONS - 1 };
            }
        } catch (error) {
            console.error('Помилка перевірки rate limit:', error);
            // У разі помилки дозволяємо відправку
            return { allowed: true };
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('handleSubmit викликано', formData);
        
        if (!formData.name.trim() || !formData.phone.trim()) {
            console.log('Валідація не пройдена');
            toast({
                title: "Помилка",
                description: "Будь ласка, заповніть обов'язкові поля (Ім'я та Телефон)",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
            return;
        }

        // Перевірка обмеження запитів
        const rateLimitCheck = checkRateLimit();
        if (!rateLimitCheck.allowed) {
            toast({
                title: "Занадто багато запитів",
                description: rateLimitCheck.message || "Будь ласка, зачекайте перед наступною відправкою.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
            return;
        }

        console.log('Початок відправки форми');
        setIsSubmitting(true);
        
        try {
            // EmailJS конфігурація з .env файлу
            const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
            const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
            const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

            console.log('EmailJS Config:', {
                serviceId: serviceId ? '✓ налаштовано' : '✗ відсутнє',
                templateId: templateId ? '✓ налаштовано' : '✗ відсутнє',
                publicKey: publicKey ? '✓ налаштовано' : '✗ відсутнє'
            });

            if (!serviceId || !templateId || !publicKey) {
                const missing = [];
                if (!serviceId) missing.push('REACT_APP_EMAILJS_SERVICE_ID');
                if (!templateId) missing.push('REACT_APP_EMAILJS_TEMPLATE_ID');
                if (!publicKey) missing.push('REACT_APP_EMAILJS_PUBLIC_KEY');
                
                throw new Error(`EmailJS не налаштовано. Відсутні змінні: ${missing.join(', ')}. Перевірте .env файл та перезапустіть сервер.`);
            }

            // Форматування дати
            const now = new Date();
            const dateStr = now.toLocaleDateString('uk-UA', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
            const dateShort = now.toLocaleDateString('uk-UA');
            const timeStr = now.toLocaleTimeString('uk-UA', {
                hour: '2-digit',
                minute: '2-digit'
            });

            const templateParams = {
                from_name: formData.name,
                from_phone: formData.phone,
                phone: formData.phone, // Додаткова змінна на випадок іншої назви в template
                name: formData.name, // Додаткова змінна на випадок іншої назви в template
                message: formData.topic || 'Не вказано',
                topic: formData.topic || 'Не вказано', // Додаткова змінна
                to_email: 'sodo4ka@gmail.com',
                user_name: formData.name, // Альтернативна назва
                user_phone: formData.phone, // Альтернативна назва
                date: dateStr, // Повна дата з часом (наприклад: "15 січня 2024, 14:30")
                date_short: dateShort, // Коротка дата (наприклад: "15.01.2024")
                time: timeStr, // Тільки час (наприклад: "14:30")
                timestamp: now.toISOString(), // ISO формат для технічних потреб
            };

            console.log('Відправка email з параметрами:', templateParams);
            console.log('Використовуються наступні ID:', { serviceId, templateId, publicKey: publicKey ? `${publicKey.substring(0, 10)}...` : 'відсутнє' });

            try {
                const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
                console.log('Email відправлено успішно:', response);
            } catch (emailError) {
                console.error('Помилка EmailJS:', emailError);
                throw emailError;
            }
            
            toast({
                title: "Дякуємо!",
                description: "Ваш запит прийнято. Ми зв'яжемося з вами найближчим часом.",
                status: "success",
                duration: 5000,
                isClosable: true,
            });
            
            setFormData({ name: '', phone: '', topic: '' });
            onClose();
        } catch (error) {
            console.error('Детальна помилка відправки:', {
                message: error.message,
                text: error.text,
                status: error.status,
                fullError: error
            });
            
            let errorMessage = "Не вдалося відправити запит. Спробуйте пізніше або зв'яжіться безпосередньо.";
            
            if (error.text) {
                errorMessage = `Помилка: ${error.text}`;
            } else if (error.message) {
                errorMessage = error.message;
            }
            
            toast({
                title: "Помилка",
                description: errorMessage,
                status: "error",
                duration: 7000,
                isClosable: true,
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
      <Box
        as='header'
        position="sticky"
        top={0}
        zIndex={1000}
        bgGradient="linear(to-r, brand.200, brand.300)"
        boxShadow="lg"
        backdropFilter="blur(10px)"
        borderBottom="1px solid"
        borderColor="whiteAlpha.200">
        <Container maxW='100vw' centerContent>
          <Flex
            w={["100%", "sm", "md", "4xl", "6xl"]}
            gridGap={[2, 4, 6]}
            p={[3, 4, 5]}
            color='white'
            alignItems="center"
            justifyContent={["center", "center", "space-between"]}
            flexWrap="wrap">
            <Box
              as={NavLink}
              to='/'
              px={4}
              py={2}
              borderRadius="lg"
              fontWeight={location.pathname === '/' ? "700" : "500"}
              color={location.pathname === '/' ? "brand.400" : "white"}
              bg={location.pathname === '/' ? "whiteAlpha.300" : "transparent"}
              position="relative"
              transition="all 0.3s ease"
              _hover={{
                bg: "whiteAlpha.200",
                transform: "translateY(-2px)",
              }}
              _after={location.pathname === '/' ? {
                content: '""',
                position: "absolute",
                bottom: "-2px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "80%",
                height: "3px",
                bg: "brand.400",
                borderRadius: "full",
              } : {}}>
              <Flex alignItems="center" gridGap={2}>
                <Icon as={VscLaw} boxSize={5} />
                <Text>Головна</Text>
              </Flex>
            </Box>
            <Box
              as={NavLink}
              to='/services/divorce'
              px={4}
              py={2}
              borderRadius="lg"
              fontWeight={location.pathname.startsWith('/services') ? "700" : "500"}
              color={location.pathname.startsWith('/services') ? "brand.400" : "white"}
              bg={location.pathname.startsWith('/services') ? "whiteAlpha.300" : "transparent"}
              position="relative"
              transition="all 0.3s ease"
              _hover={{
                bg: "whiteAlpha.200",
                transform: "translateY(-2px)",
              }}
              _after={location.pathname.startsWith('/services') ? {
                content: '""',
                position: "absolute",
                bottom: "-2px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "80%",
                height: "3px",
                bg: "brand.400",
                borderRadius: "full",
              } : {}}>
              <Text>Послуги</Text>
            </Box>
            <Box
              as={NavLink}
              to='/contacts'
              px={4}
              py={2}
              borderRadius="lg"
              fontWeight={location.pathname === '/contacts' ? "700" : "500"}
              color={location.pathname === '/contacts' ? "brand.400" : "white"}
              bg={location.pathname === '/contacts' ? "whiteAlpha.300" : "transparent"}
              position="relative"
              transition="all 0.3s ease"
              _hover={{
                bg: "whiteAlpha.200",
                transform: "translateY(-2px)",
              }}
              _after={location.pathname === '/contacts' ? {
                content: '""',
                position: "absolute",
                bottom: "-2px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "80%",
                height: "3px",
                bg: "brand.400",
                borderRadius: "full",
              } : {}}>
              <Text>Контакти</Text>
            </Box>
            <Box
              as={NavLink}
              to='/lawyer'
              px={4}
              py={2}
              borderRadius="lg"
              fontWeight={location.pathname === '/lawyer' ? "700" : "500"}
              color={location.pathname === '/lawyer' ? "brand.400" : "white"}
              bg={location.pathname === '/lawyer' ? "whiteAlpha.300" : "transparent"}
              position="relative"
              transition="all 0.3s ease"
              _hover={{
                bg: "whiteAlpha.200",
                transform: "translateY(-2px)",
              }}
              _after={location.pathname === '/lawyer' ? {
                content: '""',
                position: "absolute",
                bottom: "-2px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "80%",
                height: "3px",
                bg: "brand.400",
                borderRadius: "full",
              } : {}}>
              <Text>Юрист</Text>
            </Box>
            
            <Button
              onClick={onOpen}
              bgGradient="linear(to-r, brand.400, brand.600)"
              color="white"
              size={["sm", "md"]}
              px={[4, 6]}
              py={[2, 3]}
              borderRadius="lg"
              fontWeight="600"
              transition="all 0.3s ease"
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "xl",
                bgGradient: "linear(to-r, brand.600, brand.400)",
              }}
              display="flex"
              alignItems="center"
              gridGap={2}
              ml={["auto", "auto", 0]}>
              <Icon as={RiSmartphoneFill} boxSize={5} />
              <Text display={["none", "none", "block"]}>Замовити дзвінок</Text>
              <Text display={["block", "block", "none"]}>Дзвінок</Text>
            </Button>
          </Flex>
        </Container>

        <Modal isOpen={isOpen} onClose={onClose} size={["full", "md", "lg"]}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader color="brand.200">Замовити дзвінок</ModalHeader>
            <ModalCloseButton />
            <form onSubmit={handleSubmit}>
              <ModalBody pb={6}>
                <FormControl isRequired mb={4}>
                  <FormLabel color="brand.100">Ім'я</FormLabel>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Введіть ваше ім'я"
                    focusBorderColor="brand.400"
                  />
                </FormControl>

                <FormControl isRequired mb={4}>
                  <FormLabel color="brand.100">Телефон</FormLabel>
                  <Input
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+380 XX XXX XX XX"
                    focusBorderColor="brand.400"
                  />
                </FormControl>

                <FormControl mb={4}>
                  <FormLabel color="brand.100">Тема (за бажанням)</FormLabel>
                  <Textarea
                    name="topic"
                    value={formData.topic}
                    onChange={handleChange}
                    placeholder="Опишіть тему вашого запиту..."
                    rows={4}
                    focusBorderColor="brand.400"
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button
                  variant="ghost"
                  mr={3}
                  onClick={onClose}
                  color="brand.100">
                  Скасувати
                </Button>
                <Button
                  type="submit"
                  bgGradient="linear(to-r, brand.400, brand.600)"
                  color="white"
                  isLoading={isSubmitting}
                  loadingText="Відправка..."
                  _hover={{
                    bgGradient: "linear(to-r, brand.600, brand.400)",
                  }}>
                  Відправити
                </Button>
              </ModalFooter>
            </form>
          </ModalContent>
        </Modal>
      </Box>
    );
}