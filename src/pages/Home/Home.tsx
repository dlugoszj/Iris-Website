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
        <div classname="home-welcome-container">
        <Text
          fontSize={{ base: "4xl", md: "7xl", lg: "8xl" }}
          className="home-welcome"
        >
          Illuminate your life
        </Text>
        </div>
        <div className="welcome-desc-container">
          <Text fontSize={{ base: "xl", md: "5xl" }} className="welcome-desc" w={{ base: "50%", "2xl": "30%" }}>
            Iris empowers you to
            take control and design
            LEDs the way you want.
          </Text>
        </div>
      </GridItem>
    </Grid>
  );
};

export default Home;
