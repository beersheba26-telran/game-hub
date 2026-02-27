import { Grid, GridItem, HStack, Stack } from "@chakra-ui/react";
import Nav from "./components/Nav";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GenreSelector from "./components/GenreSelector";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: '"nav" "main"',
        md: '"nav nav" "aside main"',
      }}
      gap={{ base: 2, md: 4 }}
      px={{ base: 3, md: 4 }}
      py={{ base: 2, md: 3 }}
    >
      <GridItem area="nav">
        <Nav />
      </GridItem>
      <GridItem area="aside" hideBelow={"md"}>
        <GenreList />
      </GridItem>
      <GridItem area="main">
        <HStack
          mb={{ base: 2, sm: 0, md: 2 }}
          alignItems="flex-start"
          width="100%"
          gap={1}
          overflow="hidden"
        >
          <Stack hideFrom={"md"} minW={0}>
            <GenreSelector />
          </Stack>
          <PlatformSelector />
          <SortSelector />
        </HStack>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
