import { Outlet } from "react-router"
import { Header } from "./Header"
import { Footer } from "./Footer"
import { ScrollToTop } from "./ScrollToTop"
import { CookieBanner } from "./CookieBanner"
import { Box } from "@chakra-ui/react"

export const Layout = () => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            minH="100vh">
            <ScrollToTop />
            <Header />
            <Box 
                flex="1" 
                pb={[4, 6, 8]}
                minH="calc(100vh - 200px)">
                <Outlet/>
            </Box>
            <Footer />
            <CookieBanner />
        </Box>
    )
}