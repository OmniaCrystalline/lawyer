/** @format */

import { Container, Grid, ListItem, UnorderedList } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Services2 = () => {
  return (
    <>
      <Container centerContent>
        <Grid
          w={["xs", "sm", "md", "4xl", "6xl"]}
          gridGap={[2, 4, 6]}
          gridTemplateAreas={[`"sidebar content"`]}
          p={[2, 4, 6]}>
          <Container w={["xs", "sm"]}>{/*links*/}</Container>
          <Container w='1fr'>
            {/*content*/}
            222
          </Container>
        </Grid>
      </Container>
    </>
  );
};

const SideBar = () => {
  return (
    <>
      <UnorderedList>
        <ListItem>
          <Link to='/services2/familly-cases/'></Link>
        </ListItem>
      </UnorderedList>
    </>
  );
};
