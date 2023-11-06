import { Flex, useColorModeValue } from "@chakra-ui/react";
import PageTitle from "./PageTitle";
import SearchBar from "./SearchBar";
import RightButtons from "./RightButtons";

import DrawerButton from "./DrawerButton";

type NavbarProps = {
  btnRef: any;
  onClick: () => void;
  title: string;
};
export default function Navbar({ btnRef, onClick, title }: NavbarProps) {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={"20px"}
      position={"sticky"}
      top={0}
      height={"80px"}
      zIndex={"1"}
      alignItems={"center"}
      justifyContent={"space-between"}
      bg={useColorModeValue("brand.400", "brand.100")}
    >
      <DrawerButton btnRef={btnRef} onClick={onClick} />
      <PageTitle title={title} />
      <SearchBar />
      <RightButtons />
    </Flex>
  );
}
