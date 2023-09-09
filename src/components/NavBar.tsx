import { HStack, Flex, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";

const NavBar = () => {
  return (
    <>
      <Flex
        bg="#1b1b1b"
        w="100%"
        px="6"
        align="center"
        justify="space-between"
        position="fixed"
      >
        <Link to="/">
          {" "}
          <img width="75px" height="75px" src="/src/assets/Iris-Logo.png" />
        </Link>

        <HStack hideBelow={"lg"} spacing="150px" color="white">
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
