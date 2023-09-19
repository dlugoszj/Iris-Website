import NavBar from "../../components/NavBar";
import { Grid, GridItem, Text } from "@chakra-ui/react";
import "/src/assets/css/fonts.css";
import "./home.css";

const Home = () => {
  return (
    <Grid templateColumns="repeat(1, 1fr)">
      <GridItem>
        <NavBar />
      </GridItem>
      <GridItem w="100vw" h="auto" bg="black" marginTop={75}>
        <Text
          fontSize={{ base: "4xl", md: "7xl", lg: "8xl" }}
          className="home-welcome"
        >
          Illuminate your life
        </Text>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Text fontSize={{ base: "xl", md: "5xl" }} className="welcome-desc">
          Iris empowers you to
        </Text>
        <Text fontSize={{ base: "xl", md: "5xl" }} className="welcome-desc">
          take control and design
        </Text>
        <Text fontSize={{ base: "xl", md: "5xl" }} className="welcome-desc">
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
