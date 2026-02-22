export type Game = {
    id: number,
    name: string,
    background_image: string,
    metacritic: number,
    rating: number
}

export type FetchResponse = {
    results: Game[]
}