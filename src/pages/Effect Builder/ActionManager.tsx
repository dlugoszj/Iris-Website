// import React from "react";

import { VStack } from "@chakra-ui/react";
import Action from "../../components/Action";

const ActionManager = () => {
  return (
    <VStack spacing={4} className="eb-manager-view">
      <Action />
      <Action />
      <Action />
      <Action />
      <Action />
    </VStack>
  );
};

export default ActionManager;
