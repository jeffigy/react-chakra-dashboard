import { SearchIcon } from "@chakra-ui/icons";
import {
  Flex,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  useColorModeValue,
} from "@chakra-ui/react";

export default function SearchBar() {
  return (
    <Flex
      flexGrow={1}
      align={"center"}
      display={{ base: "none", md: "flex" }}
      maxW={{ md: "200px", lg: "400px" }}
    >
      <InputGroup>
        <Input
          borderRadius={"full"}
          variant={"outline"}
          placeholder="Seach something..."
          border={"none"}
          color={useColorModeValue("black", "white")}
          focusBorderColor={useColorModeValue("black", "white")}
          _focus={{
            bg: useColorModeValue("gray.200", "gray.700"),
            color: useColorModeValue("black", "white"),
          }}
        />
        <InputRightElement
          children={
            <IconButton
              variant={"ghost"}
              aria-label="search-button"
              icon={<SearchIcon />}
              sx={{
                borderTopRightRadius: "9999px",
                borderBottomRightRadius: "9999px",
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              }}
            />
          }
        />
      </InputGroup>
    </Flex>
  );
}
