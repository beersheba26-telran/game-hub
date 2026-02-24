import { ParentPlatform } from "./fetch-types"

export type GameQueryParams = {
    genreSlug: string | null,
    parentPlatform: ParentPlatform| null,
    searchStr: string | null,
    ordering: string | null
}