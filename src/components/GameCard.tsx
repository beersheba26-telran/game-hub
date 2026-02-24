import React from "react";
import { Badge, Card, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { Game } from "@/models/fetch-types";
import StarsRater from "./StarsRater";
interface Props {
  game: Game;
}
const GameCard: React.FC<Props> = ({ game }) => {
  return (
    <Card.Root overflow="hidden" width="100%" minW={0}>
      <Image
        width="100%"
        aspectRatio={{ base: 16 / 9, sm: 21 / 10, md: 16 / 9 }}
        objectFit={"cover"}
        src={game.background_image}
        alt={`image for game ${game.name}`}
      />
      <Card.Body gap={0} pb={1}>
        <Card.Title lineClamp={2}>{game.name}</Card.Title>
      </Card.Body>
      <Card.Footer gap={1} pt={0}>
        <Stack width="100%" gap={1}>
          <HStack justifyContent={"space-between"} align="start" width="100%">
            <Stack flexDirection={{ base: "column", sm: "row" }}>
              <Badge {...getBudgeStyle(game.metacritic)}>
                {game.metacritic}
              </Badge>
              <StarsRater rate={game.rating} />
            </Stack>
          </HStack>
          <Text fontSize="sm" color="fg.muted" lineClamp={1}>
            {game.parent_platforms.map((p) => p.platform.slug).join("; ")}
          </Text>
        </Stack>
      </Card.Footer>
    </Card.Root>
  );
};

export default GameCard;

function getBudgeStyle(metacritic: number): any{
  return metacritic ? {
    bg: metacritic > 89 ? "green" : "lightgray",
    color: metacritic > 89 ? "white" : "black",
    fontSize: "1rem",
    borderRadius: 25,
    width: "8",
  } : {display: "none"};
}
