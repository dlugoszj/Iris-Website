import React from "react";
import ActionOverviewTileContainer from "./ActionOverviewTileContainer";
import "./ActionOverviewContainer.css"

const ActionAddLayer = () => {

  React.useEffect(() => {

    window.addEventListener("resize", () => {
      
      // Run this when the component mounts. It will allow us to dynamically set the width of the triangle
      const triangle = document.querySelector(".triangle") as HTMLElement;
      // set the width equal to the height
      triangle.style.width = triangle.clientHeight + "px";
    });

    return () => {
      // Code to run when component is unmounted. It will remove the event listener
      window.removeEventListener("resize", () => {
      });
    };
  }, []);

  return (
    <ActionOverviewTileContainer>
        <div className="triangle">
            Add Layer
        </div>
    </ActionOverviewTileContainer>
  );
};

export default ActionAddLayer;
