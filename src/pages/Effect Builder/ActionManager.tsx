// import React from "react";

import { VStack, Stack } from "@chakra-ui/react";
import ActionOverviewTileContainer from "./ActionManager/ActionOverviewTileContainer";
import ActionAddLayer from "./ActionManager/ActionAddLayer";
import { LEDActionBase } from "../../utils/LEDUtils/Actions/ActionBase";
import { LEDStrip } from "../../utils/LEDUtils/Strip";

interface Props{
  actionBase: LEDActionBase[],
}

const ActionManager = ({actionBase}: Props) => {
  return (
    <VStack spacing={4} className="eb-manager-view" alignItems={"flex-start"}>
      <ActionAddLayer/>        
    </VStack>
  );
};

export default ActionManager;
