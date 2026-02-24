import { Grid, GridItem, HStack, Stack } from "@chakra-ui/react";
import Nav from "./components/Nav";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { GameQueryParams } from "./models/GameQueryParams";
import PlatformSelector from "./components/PlatformSelector";
import { ParentPlatform } from "./models/fetch-types";
import SortSelector from "./components/SortSelector";
import { SortOption } from "./models/SortOption";
import GenreSelector from "./components/GenreSelector";

function App() {
  const [gameQuery, setGameQuery] = useState<GameQueryParams>(
    {} as GameQueryParams,
  );

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
      <GridItem area="nav" bg="aliceblue">
        <Nav></Nav>
      </GridItem>
      <GridItem area="aside" hideBelow={"md"}>
        <GenreList
          genre={gameQuery.genreSlug}
          onGenreSelect={(genre: string | null) =>
            setGameQuery({ ...gameQuery, genreSlug: genre })
          }
        />
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
            <GenreSelector
              genre={gameQuery.genreSlug}
              onGenreSelect={(genre: string | null) =>
                setGameQuery({ ...gameQuery, genreSlug: genre })
              }
            ></GenreSelector>
          </Stack>
          <PlatformSelector
            parentPlatform={gameQuery.parentPlatform}
            onPlatformSelect={(platform: ParentPlatform | null) =>
              setGameQuery({ ...gameQuery, parentPlatform: platform })
            }
          ></PlatformSelector>
          <SortSelector
            sortOption={gameQuery.ordering}
            onSortSelect={(sort: SortOption | null) =>
              setGameQuery({ ...gameQuery, ordering: sort })
            }
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
