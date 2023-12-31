// import React from "react";

import { Button, VStack } from "@chakra-ui/react";
import ActionOverviewTileContainer from "./ActionManager/ActionOverviewTileContainer";
import ActionAddLayer from "./ActionManager/ActionAddLayer";
import { LEDActionBase } from "../../utils/LEDUtils/Actions/ActionBase";
import { LEDStrip } from "../../utils/LEDUtils/Strip";
import { LEDActionType } from "../../utils/LEDUtils/Actions/ActionTypes";
import "../../assets/css/fonts.css"
import * as React from "react";
import { LEDActionGradient } from "../../utils/LEDUtils/Actions/Gradient";
import GradientActionTile from "./ActionManager/GradientActionTile";

interface Props {
  LEDActionList: LEDActionBase[];
}

const ActionManager = ({ LEDActionList }: Props) => {
  const generateActionOverviewTiles = () => {
    return LEDActionList.map((action, i) => {
      switch (action.getActionType()) {
        case LEDActionType.SOLID:
          return <ActionAddLayer key={i} />;
        case LEDActionType.GRADIENT:
          return <GradientActionTile gradientAction={action}/>;
        case LEDActionType.SHIFT:
          return <p key={i}>SHIFT</p>;
      }
    });
  };

  const resizeTriangles = () => {
    // Select all the triangles
    const triangles = document.querySelectorAll(".triangle");
    // set the width equal to the height

    triangles.forEach((triangle) => {
      const triangleHtmlElement = triangle as HTMLElement;
      triangleHtmlElement.style.width = triangle.clientHeight + "px";
    });
  };

  React.useEffect(() => {
    window.addEventListener("resize", () => {
      resizeTriangles();
    });
    setTimeout(resizeTriangles, 10);
    return () => {
      // Code to run when component is unmounted. It will remove the event listener
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <VStack spacing={4} className="eb-manager-view" alignItems={"center"}>
      {generateActionOverviewTiles()}
      <Button fontFamily="Poppins-Bold">Add Layer</Button>
    </VStack>
  );
};

export default ActionManager;
