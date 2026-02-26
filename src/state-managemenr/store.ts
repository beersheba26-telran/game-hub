import { ParentPlatform } from "@/models/fetch-types";
import { SortOption } from "@/models/SortOption";
import { create } from "zustand";
type GameQuery = {
  genreSlug: string | null;
  parentPlatform: ParentPlatform | null;
  searchStr: string | null;
  ordering: SortOption | null;
  setGenre: (genreSlug: string | null)=> void;
  setParentPlatform: (parentPlatform: ParentPlatform | null)=>void;
  setSearchStr: (searchStr: string | null) => void;
  setOrdering: (ordering: SortOption | null) => void

};
const useGameQuery = create<GameQuery>(set => ({
    genreSlug: null,
    parentPlatform: null,
    searchStr: null,
    ordering: null,
    setGenre: (genreSlug => set((state) => state.genreSlug == genreSlug ? state : {genreSlug})),
    setParentPlatform: (parentPlatform => set(state => state.parentPlatform?.slug ==
         parentPlatform?.slug ? state : {parentPlatform})),
    setSearchStr: (searchStr => set(state => state.searchStr == searchStr? state : {searchStr})) ,
    setOrdering: (ordering => set(state => state.ordering?.value == ordering?.value ? state : {ordering}))    
})) 
export default useGameQuery
