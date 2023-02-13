import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
    colors: {
        brand: {
            100: "#181823", //black
            200: "#537FE7", //blue
            300: "#C0EEF2", //lightblue
            400: "#E9F8F9", //lightestblue
        },
    },
    styles: {
        global: {
            fonts: {
                body: `'Raleway', sans-serif`,
            },
            'html, body': {
                color: 'brand.100',
                lineHeight: 'tall',
                bg: 'brand.400',
                
            },
            'header': {
                bg: 'brand.200',
            },
            a: {
                color: 'brand.400',
            },
        }
    }
})