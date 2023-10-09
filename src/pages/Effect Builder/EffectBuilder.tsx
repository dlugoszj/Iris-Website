import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import NavBar from "../../components/NavBar";
import EffectBuilderLayout from "./EffectBuilderLayout";

const EffectBuilder = () => {
  return (
    <Grid
      templateAreas={`"navbar navbar"
    "back back"

    `}
      templateColumns="repeat(1, 1fr)"
    >
      <GridItem area={"navbar"}>
        <NavBar />
      </GridItem>
      <GridItem area={"back"} bg="black" w="100vw" h="100vh" paddingTop="80px">
        <EffectBuilderLayout />
      </GridItem>
    </Grid>
  );
};

export default EffectBuilder;
