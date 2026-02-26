import { ParentPlatform } from "@/models/fetch-types";
import { SortOption } from "@/models/SortOption";
import { create } from "zustand";
type GameQuery = {
  genreSlug: string | null;
  parentPlatform: ParentPlatform | null;
  searchStr: string | null;
  ordering: SortOption | null;
  //TODO
};
const useGameQuery = create<GameQuery>() //TODO Insert appropriate code
export default useGameQuery
