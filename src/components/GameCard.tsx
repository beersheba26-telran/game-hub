import React from 'react'
import { Card, Image, Stack, Text} from '@chakra-ui/react'
import { Game } from '@/models/fetch-types'
interface Props {
    game: Game
}
const GameCard: React.FC<Props> = ({game}) => {
   return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image height={"100%"} objectFit={"cover"}
        src={game.background_image}
        alt={`image for game ${game.name}`}
      />
      <Card.Body gap={0}>
        <Card.Title>{game.name}</Card.Title>
      </Card.Body>
      <Card.Footer gap={2}>
        <Stack flexDirection={{
            base: 'column',
            sm: 'row',
            md: 'column'
        }}>
            <Text>{`metacritic: ${game.metacritic}`}</Text>
            <Text>{`rating: ${game.rating}`}</Text>
        </Stack>
      </Card.Footer>
     
    </Card.Root>
  )
}

export default GameCard