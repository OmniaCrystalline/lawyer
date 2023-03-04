/** @format */

import { SideBar } from "../components/Services2";
import { Outlet } from "react-router";
import { Container, Grid, GridItem } from "@chakra-ui/react";

export const ServicesPage = () => {
  return (
    <>
      <Container as='section' maxW='100vw' centerContent>
        <Grid
          w={["xs", "sm", "md", "4xl", "6xl"]}
          gridGap={[2, 4, 6]}
          gridTemplateColumns={["1fr", "1fr", "1fr", "1fr 3fr"]}
          p={[2, 4, 6]}>
          <GridItem bg='brand.300' p={[2, 4]} gridGap={4} h={["auto", "auto",'auto', '100vh']}>
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
