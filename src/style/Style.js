import {
    extendTheme,
} from "@chakra-ui/react"

export const theme = extendTheme({
  colors: {
    brand: {
      50: "#F8F9FA",
      100: "#1A1A2E",
      200: "#16213E",
      300: "#0F3460",
      400: "#E94560",
      500: "#ECDBBA",
      600: "#C84B31",
      700: "#2D4263",
    },
  },
  fonts: {
    heading: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
    body: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
  },
  styles: {
    global: {
      "html, body": {
        color: "brand.100",
        lineHeight: "1.7",
        bg: "linear-gradient(135deg, #F8F9FA 0%, #E8EAF6 100%)",
        minHeight: "100vh",
      },
      "*::placeholder": {
        color: "gray.400",
      },
      "*, *::before, &::after": {
        borderColor: "gray.200",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "600",
        borderRadius: "lg",
        _hover: {
          transform: "translateY(-2px)",
          boxShadow: "lg",
        },
        transition: "all 0.2s",
      },
    },
    Card: {
      baseStyle: {
        container: {
          boxShadow: "xl",
          borderRadius: "xl",
          bg: "white",
          _hover: {
            transform: "translateY(-4px)",
            boxShadow: "2xl",
          },
          transition: "all 0.3s ease",
        },
      },
    },
  },
  shadows: {
    "soft": "0 2px 8px rgba(0, 0, 0, 0.08)",
    "medium": "0 4px 16px rgba(0, 0, 0, 0.12)",
    "large": "0 8px 32px rgba(0, 0, 0, 0.16)",
  },
});

