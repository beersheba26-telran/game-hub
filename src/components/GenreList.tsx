import useGenre from "@/services/hooks/useGenre";
import useGameQuery from "@/state-managemenr/store";
import { Avatar, Button, HStack, List, Spinner, Text } from "@chakra-ui/react";
import { FC,} from "react";

const GenreList: FC = () => {
  const {data:genres, isLoading} = useGenre();
  const genre = useGameQuery(s => s.genreSlug)
  const setGenre = useGameQuery(s => s.setGenre)
 return (
    <>
        {isLoading && <Spinner></Spinner>}
        <List.Root listStyle="none" maxHeight="85vh" overflow="auto" width="15vw">

          {genres.map((g) => (
            <List.Item key={g.id}>
              <HStack padding={2}>
                <Avatar.Root shape="rounded" size="lg">
                  <Avatar.Fallback name={g.name} />
                  <Avatar.Image src={g.image_background || undefined} />
                </Avatar.Root>
                <Button
                  variant={"outline"}
                  borderWidth="0"
                  fontSize={"1.1rem"}
                  paddingX="1"
                  height="auto"
                  whiteSpace="normal"
                  textAlign="left"
                  onClick={() => setGenre(g.slug)}
                  >
                  <Text maxW="10vw" lineHeight="1.2" fontWeight={g.slug==genre? "bold":"normal"}>
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
