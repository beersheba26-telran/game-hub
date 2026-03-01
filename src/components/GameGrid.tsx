import {
  Box,
  ButtonGroup,
  VStack,
  HStack,
  IconButton,
  Pagination,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import GameCard from "./GameCard";
import useGame from "@/services/hooks/useGame";
import { FC } from "react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import useGameQuery from "@/state-managemenr/store";

const GameGrid: FC = () => {
  const {
    data: games,
    isLoading,
    error,
    count
  } = useGame();
  const page = useGameQuery(s => s.page)
  const setPage = useGameQuery(s => s.setPage)
  return (
    <VStack  height="80vh" overflow="hidden">
      {isLoading && <Spinner></Spinner>}
      {!!error ? (
        <Text color={"red"} fontSize="2rem" fontWeight={"bold"}>
          {error}
        </Text>
      ) : (
        <>
          <Box flex="1" overflowY="auto" overflowX="hidden">
            <SimpleGrid
              width="100%"
              columns={{
                base: 1,
                sm: 2,
                md: 3,
              }}
              columnGap={5}
              rowGap={12}
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
          </Box>
          <HStack justifyContent="center" mt={4} pb={4}>
            <Pagination.Root
              count={count}
              pageSize={20}
              page={page}
              onPageChange={(details) => setPage(details.page)}
             
            >
              <ButtonGroup variant="outline" size="sm">
                <Pagination.PrevTrigger
                >
                 
                    <LuChevronLeft></LuChevronLeft>
                 
                </Pagination.PrevTrigger>
                <Pagination.Items render={(page)=> (
                  <IconButton variant={{ base: "outline", _selected: "solid" }}>
                    {page.value}
                  </IconButton>
                )}/>

                
                <Pagination.NextTrigger >
                    <LuChevronRight></LuChevronRight>
                </Pagination.NextTrigger>
              </ButtonGroup>
            </Pagination.Root>
          </HStack>
        </>
      )}
    </VStack>
  );
};

export default GameGrid;
