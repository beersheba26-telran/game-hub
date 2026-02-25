import { HStack, Image } from "@chakra-ui/react";
import logo from "/image.png";
import { FC } from "react";
import { ColorModeButton } from "./ui/color-mode";
import SearchBar from "./SearchBar";

interface Props {
  onSubmitText: (text: string) => void;
}
const Nav: FC<Props> = ({ onSubmitText }) => {
  return (
    <HStack justifyContent="space-between" width="100%"  gap={2}>
      <Image src={logo} boxSize={"10"} />
      <SearchBar
        onSubmitSearchText={(text: string) => onSubmitText(text)}
      ></SearchBar>
      <ColorModeButton />
    </HStack>
  );
};

export default Nav;
