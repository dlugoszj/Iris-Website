import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

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
                <img
                  width="75px"
                  height="75px"
                  src="/src/assets/Iris-Logo.png"
                />
              </Link>
            </Center>
          </DrawerHeader>

          <DrawerBody>
            <VStack direction="row" mb="4" spacing="50px">
              <Link to="/" onClick={onClose}>
                {" "}
                Home{" "}
              </Link>
              <Link to="/Marketplace" onClick={onClose}>
                {" "}
                Effect Library{" "}
              </Link>
              <Link to="/" onClick={onClose}>
                {" "}
                Effect Builder{" "}
              </Link>
              <Link to="/" onClick={onClose}>
                {" "}
                About{" "}
              </Link>
            </VStack>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default HamburgerMenu;
