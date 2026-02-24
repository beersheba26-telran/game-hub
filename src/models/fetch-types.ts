export type Platform = {
  platform: {
    slug: string;
  };
};
export type Game = {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
  rating: number;
  parent_platforms: Platform[];
};
export type Genre = {
  id: number;
  name: string;
  slug: string | null;
  games_count: number;
  image_background: string;
};
export type ParentPlatform = {
  id: number,
  slug: string | null,
  name: string
}

export type FetchResponse<T> = {
  results: T[];
};
