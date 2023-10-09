import { Grid, GridItem } from "@chakra-ui/react";
import "./effectBuilder.css";
// import React from "react";
import Room from "../../components/Room";
import EffectManager from "./EffectManager";
import EffectEditor from "./EffectEditor";

const EffectBuilderLayout = () => {
  return (
    <div className="eb-main-view">
      <Grid
        templateAreas={`"room manager"
"editor editor"
      
`}
        w="100%"
        h="90%"
      >
        <GridItem area={"room"}>
          <Room />
        </GridItem>
        <GridItem area={"manager"}>
          <EffectManager />
        </GridItem>
        <GridItem area={"editor"}>
          <EffectEditor />
        </GridItem>
      </Grid>
    </div>
  );
};

export default EffectBuilderLayout;
