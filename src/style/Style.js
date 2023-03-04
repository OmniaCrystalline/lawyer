import {
    extendTheme,
    //defineStyleConfig
} from "@chakra-ui/react"

export const theme = extendTheme({
  colors: {
    brand: {
      100: "#191919",
      200: "#2D4263", //
      300: "#C84B31",
      400: "#ECDBBA",
    },
  },
  styles: {
    global: {
      fonts: {
        body: `'Raleway', sans-serif`,
      },
      "html, body": {
        color: "brand.100",
        lineHeight: "tall",
        bg: "brand.400",
      },
      header: {
        bg: "brand.200",
      },
      a: {
        display: "flex",
        alignItems: "center",
        variants: {
          navi: {
            color: "brand.400",
          },
          pagelink: {
            color: "brand.100",
          },
        },
      },
    },
  },
});

