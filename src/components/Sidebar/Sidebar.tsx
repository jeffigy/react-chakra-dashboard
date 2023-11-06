import {
  Box,
  CloseButton,
  Flex,
  Stack,
  Text
} from "@chakra-ui/react";
import {
  Calendar,
  Edit,
  Home,
  LogIn,
  MessageSquare,
  Settings,
} from "react-feather";
import Navlinks from "./Navlink";

const NavItems = [
  { name: "Home", icon: Home, to: "/" },
  { name: "Schedule", icon: Calendar, to: "/schedule" },
  { name: "Chat", icon: MessageSquare, to: "/chats" },
  { name: "Settings", icon: Settings, to: "/settings" },
  { name: "Login", icon: LogIn, to: "/login" },
  { name: "Register", icon: Edit, to: "/register" },
];
type SidebarProps = {
  onClose: () => void;
  title: string;
  display?: any;
};

function Sidebar({ onClose, title, display }: SidebarProps) {
  return (
    <Box
      bg={"blue.500"}
      h={"full"}
      w={{ base: "full", md: 60 }}
      pos={"fixed"}
      display={display}
      p={5}
    >
      <Flex
        h={"80px"}
        mx={8}
        alignItems={"center"}
        justifyContent={{ base: "space-between", md: "center" }}
      >
        <Text>{title}</Text>
        <CloseButton
          display={{ base: "flex", md: "none" }}
          border={"1px solid"}
          onClick={onClose}
        />
      </Flex>
      <Stack spacing={5}>
        {NavItems.map((item) => (
          <Navlinks
            key={item.name}
            name={item.name}
            icon={item.icon}
            to={item.to}
          />
        ))}
      </Stack>
    </Box>
  );
}

export default Sidebar;
