import { Button, Text } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
type NavlinksProps = {
  name: string;
  icon: any;
  to: string;
};

export default function Navlink({ name, icon, to }: NavlinksProps) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    // <NavLink to={to}>
    //   <Flex
    //     color={useColorModeValue("black", "white")}
    //     bg={isActive ? "blue.500" : "transparent"}
    //     align={"center"}
    //     p={"15px"}
    //     mx={"30px"}
    //     borderRadius={"lg"}
    //     _hover={{
    //       boxShadow: "none",
    //       bg: "blue.600",
    //       textDecoration: "none",
    //       fontWeight: "normal",
    //     }}
    //   >
    //     {icon && <Icon as={icon} mr={"15px"} />}
    //     <Text>{name}</Text>
    //   </Flex>
    // </NavLink>
    <Button
      alignContent={"start"}
      // leftIcon={<Icon as={icon} mr={"15px"} />}
      as={NavLink}
      size={"lg"}
      colorScheme="gray"
      borderRadius={"lg"}
      variant={isActive ? "solid" : "ghost"}
      to={to}
    >
      <Text>{name}</Text>
    </Button>
  );
}
