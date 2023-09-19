import { HStack, Flex, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import "/src/assets/css/fonts.css";
import "./css/Menus.css";
import logo from "../assets/Iris-Logo.png";

const NavBar = () => {
  return (
    <>
      <Flex className="nav-bar-home">
        <Link to="/">
          {" "}
          <img width="75px" height="75px" src={logo} />
        </Link>

        <HStack hideBelow={"lg"} spacing="150px" color="white">
          <Link to="/"> Home </Link>
          <Link to="/Marketplace"> Effect Library </Link>
          <Link to="/"> Effect Builder </Link>
          <Link to="/"> About </Link>
        </HStack>

        <HStack>
          <HamburgerMenu />
          <Button className="menu-font">Sign In</Button>
        </HStack>
      </Flex>
    </>
  );
};

export default NavBar;
