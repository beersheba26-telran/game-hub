import { Grid, GridItem, Stack } from "@chakra-ui/react"
import Nav from "./components/Nav"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import { GameQueryParams } from "./models/GameQueryParams"


function App() {
 const [gameQuery, setGameQuery] = useState<GameQueryParams>({} as GameQueryParams)

  return (
    <Grid templateAreas={
      {
        base: '"nav" "main"',
        md: '"nav nav" "aside main"  '
      }
    }>
      <GridItem area="nav" bg="aliceblue">
       <Nav></Nav>
      </GridItem>
      <Stack hideBelow={"md"}>
        <GridItem area="aside"  >
          <GenreList genre={gameQuery.genreSlug} onGenreSelect={(genre: string) => setGameQuery({...gameQuery, genreSlug:genre})}/>
        </GridItem>
      </Stack>
       <GridItem area="main" >
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>
      
    </Grid>
  )
}

export default App
