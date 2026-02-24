import { SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGame from "@/services/hooks/useGame";
import { FC } from "react";
import { GameQueryParams } from "@/models/GameQueryParams";
type Props = {
  gameQuery: GameQueryParams;
};
const GameGrid: FC<Props> = ({ gameQuery }) => {
  const { data: games, isLoading, error } = useGame(gameQuery);

  return (
    <>
      {isLoading && <Spinner></Spinner>}
      {!!error ? (
        <Text color={"red"} fontSize="2rem" fontWeight={"bold"}>
          {error}
        </Text>
      ) : (
        <SimpleGrid
          width="100%"
          columns={{
            base: 1,
            sm: 2,
            md: 3,
          }}
          columnGap={5}
          rowGap={12}
          maxHeight={{ base: "none", md: "80vh" }}
          overflowY={{ base: "visible", md: "auto" }}
          overflowX="hidden"
          padding={{
            base: 4,
            sm: 1,
            md: 5,
          }}
        >
          {games?.map((g) => (
            <GameCard key={g.id} game={g} />
          ))}
        </SimpleGrid>
      )}
    </>
  );
};

export default GameGrid;
