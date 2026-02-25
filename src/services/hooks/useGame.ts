import { Game } from "@/models/fetch-types";
import useData from "./useData";
import { GameQueryParams } from "@/models/GameQueryParams";
export default function useGame(gameQuery: GameQueryParams): {data: Game[], isLoading: boolean, error:string} {
    return useData<Game>("games", {params: {genres: gameQuery.genreSlug,
         parent_platforms: gameQuery.parentPlatform?.id == -1 ? null :
          gameQuery.parentPlatform?.id,ordering: gameQuery.ordering?.value , search: gameQuery.searchStr},
        },[gameQuery]);
}