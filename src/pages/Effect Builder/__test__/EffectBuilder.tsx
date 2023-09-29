import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import NavBar from "../../../components/NavBar";

const EffectBuilder = () => {
  return (
    <Grid
      templateAreas={`"navbar navbar"
    "room editor"
    `}
      templateColumns="repeat(2, 1fr)"
    >
      <GridItem area={"navbar"}>
        <NavBar />
      </GridItem>
      <GridItem pl="2" bg="pink.300" area={"room"} marginTop={75}>
        Room
      </GridItem>
      <GridItem pl="2" bg="orange.300" area={"editor"} marginTop={75}>
        Editor
      </GridItem>
    </Grid>
  );
};

export default EffectBuilder;
