import React from "react";
import NavBar from "../../components/NavBar";
import { Grid, GridItem, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <Grid templateColumns="repeat(1, 1fr)">
      <GridItem>
        <NavBar />
      </GridItem>
      <GridItem w="100vw" h="auto" bg="#1b1b1b" marginTop={75}>
        <Text
          align="center"
          fontSize={{ base: "5xl", md: "8xl", lg: "9xl" }}
          backgroundClip="text"
          color="transparent"
          bgGradient="linear-gradient(to right, #FF1CBF, #00FFE0)"
          m="auto"
          w="75vw"
        >
          Illuminate your life
        </Text>
        <Text align="center" fontSize={{ base: "xl", md: "5xl" }} color="white">
          Iris empowers you to
        </Text>
        <Text align="center" fontSize={{ base: "xl", md: "5xl" }} color="white">
          {" "}
          take control and design
        </Text>
        <Text align="center" fontSize={{ base: "xl", md: "5xl" }} color="white">
          {" "}
          LEDs the way you want.
        </Text>
      </GridItem>
      <GridItem h="500" bg="#1b1b1b">
        <Text>Hi Part 2</Text>
      </GridItem>
    </Grid>
  );
};

export default Home;
