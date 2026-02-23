import { Grid, GridItem, Stack } from "@chakra-ui/react"
import Nav from "./components/Nav"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"


function App() {
 const [genre, setGenre] = useState<string | null>(null)

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
          <GenreList genre={genre} onGenreSelect={(genre: string) => setGenre(genre)}/>
        </GridItem>
      </Stack>
       <GridItem area="main" >
        <GameGrid genre={genre}/>
      </GridItem>
      
    </Grid>
  )
}

export default App
