import { HStack, Flex, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

const NavBar = () => {
  return (
    <>
      <Flex bg="#fff0f5" w="100%" px="6" align="center" justify="space-between">
        <Link to="/">
          {" "}
          <img width="75px" height="75px" src="/src/assets/Iris-Logo.png" />
        </Link>

        <HStack hideBelow={"lg"} spacing="150px">
          <Link to="/"> Home </Link>
          <Link to="/Marketplace"> Effect Library </Link>
          <Link to="/"> Effect Builder </Link>
          <Link to="/"> About </Link>
        </HStack>

        <HStack>
          <HamburgerMenu />
          <Button>Sign In</Button>
        </HStack>
      </Flex>
    </>
  );
};

export default NavBar;
