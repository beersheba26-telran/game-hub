import { Grid, GridItem, Stack } from "@chakra-ui/react"
import Nav from "./components/Nav"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"


function App() {
 

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
          <GenreList/>
        </GridItem>
      </Stack>
       <GridItem area="main" >
        <GameGrid/>
      </GridItem>
      
    </Grid>
  )
}

export default App
