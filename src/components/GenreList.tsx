import useGenre from "@/services/hooks/useGenre";
import { Avatar, Button, HStack, List, Spinner, Text } from "@chakra-ui/react";

const GenreList = () => {
  const {data:genres, isLoading} = useGenre();
  
  return (
    <>
        {isLoading && <Spinner></Spinner>}
        <List.Root listStyle="none" maxHeight="85vh" overflow="auto" width="15vw">
          {genres.map((g) => (
            <List.Item key={g.id}>
              <HStack padding={2}>
                <Avatar.Root shape="rounded" size="lg">
                  <Avatar.Fallback name={g.name} />
                  <Avatar.Image src={g.image_background} />
                </Avatar.Root>
                <Button
                  variant={"outline"}
                  borderWidth="0"
                  fontSize={"1.1rem"}
                  paddingX="1"
                  height="auto"
                  whiteSpace="normal"
                  textAlign="left"
                >
                  <Text maxW="10vw" lineHeight="1.2" fontWeight={"normal"}>
                    {g.name}
                  </Text>
                </Button>
              </HStack>
            </List.Item>
          ))}
        </List.Root>
          ;
    </>)
};

export default GenreList;
