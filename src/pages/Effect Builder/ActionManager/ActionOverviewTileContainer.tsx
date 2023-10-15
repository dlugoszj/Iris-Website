// import React from "react";
interface Props{
  children: React.ReactNode,
}

const ActionOverviewTileContainer = ({children}: Props) => {
  return <div className="action-container">{children}</div>;
};

export default ActionOverviewTileContainer;
