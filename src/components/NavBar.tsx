import { HStack, Box, Center } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
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
            <Link to="/"> Home </Link>
            <Link to="/Marketplace"> Effect Library </Link>
            <Link to="/">
              {" "}
              <img src="/src/assets/Iris-Logo.png" />
            </Link>
            <Link to="/"> Effect Builder </Link>
            <Link to="/"> Account </Link>
          </HStack>
        </Box>
      </Center>
    </>
  );
};

export default NavBar;
