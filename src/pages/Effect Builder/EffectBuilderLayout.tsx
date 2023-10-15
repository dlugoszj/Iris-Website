import { Grid, GridItem } from "@chakra-ui/react";
import "./effectBuilder.css";
// import React from "react";
import Room from "../../components/Room";
import ActionManager from "./ActionManager";
import ActionEditor from "./ActionEditor";

import { LEDActionBase } from "../../utils/LEDUtils/Actions/ActionBase";
import { LEDStrip } from "../../utils/LEDUtils/Strip";
import * as React from "react";

const EffectBuilderLayout = () => {

  const [numLEDs, setNumLEDs] = React.useState<number>(60);
  const [strip, setStrip] = React.useState<LEDStrip>(new LEDStrip(60));
  const [actions, setActions] = React.useState<LEDActionBase[]>([]);

  React.useEffect(() => {
    setStrip(new LEDStrip(numLEDs));
  }, [numLEDs]);

  return (
    <div className="eb-main-view">
      <Grid
        templateAreas={`"room manager"
                        "editor editor"`}
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
