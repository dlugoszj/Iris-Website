import { HStack, Flex, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import "/src/assets/css/fonts.css";

const NavBar = () => {
  return (
    <>
      <Flex
        bg="black"
        w="100%"
        px="6"
        align="center"
        justify="space-between"
        position="fixed"
        borderBottom="1px"
        borderBottomColor="#282828"
      >
        <Link to="/">
          {" "}
          <img width="75px" height="75px" src="/src/assets/Iris-Logo.png" />
        </Link>

        <HStack hideBelow={"lg"} spacing="150px" color="white">
          <Link to="/" className="font">
            {" "}
            Home{" "}
          </Link>
          <Link to="/Marketplace" className="font">
            {" "}
            Effect Library{" "}
          </Link>
          <Link to="/" className="font">
            {" "}
            Effect Builder{" "}
          </Link>
          <Link to="/" className="font">
            {" "}
            About{" "}
          </Link>
        </HStack>

        <HStack>
          <HamburgerMenu />
          <Button className="font">Sign In</Button>
        </HStack>
      </Flex>
    </>
  );
};

export default NavBar;
