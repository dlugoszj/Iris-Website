import React from "react";
import NavBar from "../../components/NavBar";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import "/src/assets/css/fonts.css";

const Home = () => {
  return (
    <Grid templateColumns="repeat(1, 1fr)">
      <GridItem>
        <NavBar />
      </GridItem>
      <GridItem w="100vw" h="auto" bg="black" marginTop={75}>
        <Text
          align="center"
          fontSize={{ base: "4xl", md: "7xl", lg: "8xl" }}
          backgroundClip="text"
          color="transparent"
          bgGradient="linear-gradient(to right, #FF1CBF, #00FFE0)"
          m="auto"
          w="75vw"
          className="font"
          paddingTop="100px"
        >
          Illuminate your life
        </Text>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Text
          align="center"
          fontSize={{ base: "xl", md: "5xl" }}
          color="white"
          className="font"
        >
          Iris empowers you to
        </Text>
        <Text
          align="center"
          fontSize={{ base: "xl", md: "5xl" }}
          color="white"
          className="font"
        >
          {" "}
          take control and design
        </Text>
        <Text
          align="center"
          fontSize={{ base: "xl", md: "5xl" }}
          color="white"
          className="font"
        >
          {" "}
          LEDs the way you want.
        </Text>
      </GridItem>
      <GridItem h="500" bg="black">
        <Text>Hi Part 2</Text>
      </GridItem>
    </Grid>
  );
};

export default Home;
