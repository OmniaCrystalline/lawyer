import {
    extendTheme,
    //defineStyleConfig
} from "@chakra-ui/react"

export const theme = extendTheme({
    colors: {
        brand: {
            100: "#1A120B", 
            200: "#3C2A21", 
            300: "#D5CEA3", 
            400: "#E5E5CB", 
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
                variants: {
                    navi: {
                        color: 'brand.400'
                    },
                    pagelink: {
                        color: 'brand.100'
                    }

                },
            },            
        }
    }
})

