import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";
import "./css/Menus.css";
import logo from "../assets/Iris-Logo.png";

const HamburgerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  return (
    <>
      <IconButton
        aria-label={"Open Menu"}
        size="md"
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        hideFrom={"lg"}
        onClick={onOpen}
        ref={btnRef}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        {" "}
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            {" "}
            <Center>
              <Link to="/" onClick={onClose}>
                {" "}
                <img width="75px" height="75px" src={logo} />
              </Link>
            </Center>
          </DrawerHeader>

          <DrawerBody>
            <VStack direction="row" mb="4" spacing="50px">
              <Link to="/" onClick={onClose} className="font">
                {" "}
                Home{" "}
              </Link>
              <Link to="/Marketplace" onClick={onClose} className="font">
                {" "}
                Effect Library{" "}
              </Link>
              <Link to="/effectBuilder" onClick={onClose} className="font">
                {" "}
                Effect Builder{" "}
              </Link>
              <Link to="/" onClick={onClose} className="font">
                {" "}
                About{" "}
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default HamburgerMenu;
