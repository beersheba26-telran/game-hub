import React from 'react'
import { Badge, Card, HStack, Image, Stack, Text} from '@chakra-ui/react'
import { Game } from '@/models/fetch-types'
import StarsRater from './StarsRater'
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
      <Card.Footer gap={2} marginTop = {{
        sm: "-30px",
        md: "0px"
      }}>
        <HStack justifyContent={'space-between'}>
            <Stack flexDirection={{
                base: 'column',
                sm: 'row',
                md: 'column'
            }}>
                <Badge {...getBudgeStyle(game.metacritic)}>{game.metacritic}</Badge>
                <StarsRater rate={game.rating}/>
            </Stack>
            <Text marginLeft={{base: 10, sm: 0, md:20}}>{game.parent_platforms.map(p => p.platform.slug).join("; ")}</Text>
        </HStack>
      </Card.Footer>
     
    </Card.Root>
  )
}

export default GameCard

function getBudgeStyle(metacritic: number): {bg: string, color: string,
    fontSize: string, borderRadius: number, width: string}
{
    return {bg: metacritic > 89 ? 'green' : 'lightgray',
        color: metacritic > 89 ? 'white' : 'black',
        fontSize: "1rem", borderRadius: 25, width: "8"

    }
}
