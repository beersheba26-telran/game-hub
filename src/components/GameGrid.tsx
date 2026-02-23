import { type FetchResponse, type Game } from '@/models/fetch-types'
import apiClient from '@/services/app-client'
import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import GameCard from './GameCard'

const GameGrid = () => {
    const [games, setGames] = React.useState<Game[]>([])
    React.useEffect(() => {
        apiClient.get<FetchResponse<Game>>('games').then(res => setGames(res.data.results))
    },[])
    
  return (
     <SimpleGrid
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
    </SimpleGrid>
  )
}

export default GameGrid
