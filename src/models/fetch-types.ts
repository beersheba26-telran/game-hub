export type Platform = {
    platform: {
        slug: string
    }
}
export type Game = {
    id: number,
    name: string,
    background_image: string,
    metacritic: number,
    rating: number,
    parent_platforms: Platform[]
}

export type FetchResponse = {
    results: Game[]
}