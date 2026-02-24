import { ParentPlatform } from "./fetch-types"
import { SortOption } from "./SortOption"

export type GameQueryParams = {
    genreSlug: string | null,
    parentPlatform: ParentPlatform| null,
    searchStr: string | null,
    ordering: SortOption | null
}