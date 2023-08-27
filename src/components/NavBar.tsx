import { HStack, Text, Box, Center } from "@chakra-ui/react";
import React from "react";

const NavBar = () => {
  return (
    <Center>
      <Box
        background="#fff0f5"
        w="90%"
        p={4}
        color="black"
        rounded="xl"
        marginTop="35px"
      >
        <HStack justifyContent={"space-between"} padding="10px">
          <Text>Home</Text>
          <Text>Effect Library</Text>
          <Text>Logo</Text>
          <Text>Effect Builder</Text>
          <Text>Account</Text>
        </HStack>
      </Box>
    </Center>
  );
};

export default NavBar;
