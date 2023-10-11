import { Grid, GridItem } from "@chakra-ui/react";
import "./effectBuilder.css";
// import React from "react";
import Room from "../../components/Room";
import ActionManager from "./ActionManager";
import ActionEditor from "./ActionEditor";

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
          <ActionManager />
        </GridItem>
        <GridItem area={"editor"}>
          <ActionEditor />
        </GridItem>
      </Grid>
    </div>
  );
};

export default EffectBuilderLayout;
