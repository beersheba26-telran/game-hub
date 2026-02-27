import { HStack, Image } from "@chakra-ui/react";
import logo from "/image.png";
import { FC } from "react";
import { ColorModeButton } from "./ui/color-mode";
import SearchBar from "./SearchBar";


const Nav: FC = () => {
  return (
    <HStack justifyContent="flex-start" width={{
      base: "90%",
      sm: "100%"
    }}  gap={
      {
        base: 0,
        sm: 2
      }
    }>
      <Image src={logo} boxSize={"8"} />
      <SearchBar/>
      <ColorModeButton />
    </HStack>
  );
};

export default Nav;
