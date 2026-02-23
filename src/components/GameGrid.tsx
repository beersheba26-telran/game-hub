
import { SimpleGrid, Spinner, Text } from '@chakra-ui/react'
import GameCard from './GameCard'
import useGame from '@/services/hooks/useGame'

const GameGrid = () => {
   const {data:games, isLoading, error} = useGame()
    
  return (
    
     <>
        
        {isLoading && <Spinner></Spinner>}
       {!!error ? <Text color={'red'} fontSize = "2rem" fontWeight={"bold"} >{error}</Text> : <SimpleGrid
        columns={{
          base: 1,
          sm: 2,
          md: 3,
        }}
        columnGap={5}
        rowGap={12}
        maxHeight={"80vh"}
        overflow={"auto"}
        padding={{
          base: 4,
          sm: 1,
          md: 5
        }}
           >
        {games?.map((g) => (
          <GameCard key ={g.id} game={g}/>
        ))}
           </SimpleGrid>}
       
     </>  )
}

export default GameGrid
