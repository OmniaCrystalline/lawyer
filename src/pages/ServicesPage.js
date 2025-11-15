/** @format */

import { SideBar } from "../components/Services2";
import { Outlet, useLocation } from "react-router";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import { Helmet } from "react-helmet-async";

export const ServicesPage = () => {
  const location = useLocation();
  
  return (
    <>
      <Helmet>
        <title>Послуги адвоката | Сімейні спори, Спадкові спори, Житлові спори | Львів</title>
        <meta name="description" content="Юридичні послуги адвоката у Львові: розірвання шлюбу, аліменти, спадкові спори, житлові спори, земельні спори, договірні правовідносини, кримінальне право, адміністративні правопорушення." />
        <meta name="keywords" content="послуги адвоката, розірвання шлюбу, аліменти, спадкові спори, житлові спори, земельні спори, договірні правовідносини, кримінальне право" />
        <link rel="canonical" href={`https://lawyer-help5.firebaseapp.com${location.pathname}`} />
        <meta property="og:title" content="Послуги адвоката | Львів" />
        <meta property="og:description" content="Юридичні послуги адвоката у Львові: сімейні спори, спадкові спори, житлові спори." />
        <meta property="og:url" content={`https://lawyer-help5.firebaseapp.com${location.pathname}`} />
      </Helmet>
      <Container as='section' maxW='100vw' centerContent>
        <Grid
          w={["xs", "sm", "md", "4xl", "6xl"]}
          gridGap={[2, 4, 6]}
          gridTemplateColumns={["1fr", "1fr", "1fr", "1fr 3fr"]}
          p={[2, 4, 6]}>
          <GridItem 
            bgGradient="linear(to-b, brand.200, brand.300)"
            p={[3, 4, 5]} 
            gridGap={4} 
            h={["auto", "auto",'auto', '100vh']}
            borderRadius="xl"
            boxShadow="xl"
            position={["relative", "relative", "relative", "sticky"]}
            top={["auto", "auto", "auto", "80px"]}>
            <SideBar />
          </GridItem>
          <GridItem>
            <Outlet />
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};
