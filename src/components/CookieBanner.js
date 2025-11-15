import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Text,
  Button,
  Flex,
  useColorModeValue
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  useEffect(() => {
    // Перевіряємо, чи користувач вже прийняв cookies
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Показуємо банер через невелику затримку
      setTimeout(() => {
        setIsVisible(true);
      }, 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <Box
          as={motion.div}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          position="fixed"
          bottom={0}
          left={0}
          right={0}
          zIndex={9999}
          bg={bgColor}
          borderTop="1px solid"
          borderColor={borderColor}
          boxShadow="0 -4px 6px rgba(0, 0, 0, 0.1)"
          p={[4, 6]}
        >
          <Box
            maxW={['100%', '100%', '4xl', '6xl']}
            mx="auto"
            px={[2, 4, 6]}
          >
            <Flex
              flexDirection={['column', 'column', 'row']}
              alignItems={['flex-start', 'flex-start', 'center']}
              justifyContent="space-between"
              gap={4}
            >
              <Box flex="1">
                <Text
                  fontSize={['sm', 'md']}
                  color="brand.100"
                  lineHeight="tall"
                  mb={2}
                >
                  Ми використовуємо cookies для покращення вашого досвіду на сайті. 
                  Продовжуючи використовувати сайт, ви погоджуєтесь з нашою{' '}
                  <Link
                    to="/privacy"
                    style={{
                      color: 'var(--chakra-colors-brand-400)',
                      textDecoration: 'underline'
                    }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--chakra-colors-brand-600)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--chakra-colors-brand-400)'}
                  >
                    Політикою конфіденційності
                  </Link>
                  .
                </Text>
              </Box>
              <Flex
                gap={3}
                flexDirection={['column', 'row']}
                w={['100%', 'auto']}
              >
                <Button
                  onClick={handleAccept}
                  bgGradient="linear(to-r, brand.400, brand.600)"
                  color="white"
                  size={['sm', 'md']}
                  px={6}
                  py={2}
                  borderRadius="lg"
                  fontWeight="600"
                  transition="all 0.3s ease"
                  _hover={{
                    transform: "translateY(-2px)",
                    boxShadow: "lg",
                  }}
                  as={motion.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Прийняти
                </Button>
                <Button
                  onClick={handleDecline}
                  variant="outline"
                  borderColor="brand.300"
                  color="brand.200"
                  size={['sm', 'md']}
                  px={6}
                  py={2}
                  borderRadius="lg"
                  fontWeight="600"
                  transition="all 0.3s ease"
                  _hover={{
                    bg: "brand.50",
                    borderColor: "brand.400",
                  }}
                  as={motion.button}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Відхилити
                </Button>
              </Flex>
            </Flex>
          </Box>
        </Box>
      )}
    </AnimatePresence>
  );
};

