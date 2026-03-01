import { Game } from "@/models/fetch-types";
import useData from "./useData";
import useGameQuery from "@/state-managemenr/store";
export default function useGame(): {data: Game[], isLoading: boolean, error:string, count: number} {
    const {genreSlug,parentPlatform, ordering, searchStr, page } = useGameQuery()
    return useData<Game>("games", {params: {genres: genreSlug,
         parent_platforms: parentPlatform?.id == -1 ? null :
          parentPlatform?.id,ordering: ordering?.value , search: searchStr, page},
        });
}