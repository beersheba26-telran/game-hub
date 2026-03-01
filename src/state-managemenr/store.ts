import { ParentPlatform } from "@/models/fetch-types";
import { SortOption } from "@/models/SortOption";
import { create } from "zustand";
type GameQuery = {
  genreSlug: string | null;
  parentPlatform: ParentPlatform | null;
  searchStr: string | null;
  ordering: SortOption | null;
  page: number;
  setPage: (page: number) => void;
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
    page: 1,
    setPage: (page => set(state => state.page == page ? state : {page})),
    setGenre: (genreSlug => set((state) => state.genreSlug == genreSlug ? state : {genreSlug, page: 1})),
    setParentPlatform: (parentPlatform => set(state => state.parentPlatform?.slug ==
         parentPlatform?.slug ? state : {parentPlatform, page: 1})),
    setSearchStr: (searchStr => set(state => state.searchStr == searchStr? state : {searchStr, page: 1})) ,
    setOrdering: (ordering => set(state => state.ordering?.value == ordering?.value ? state : {ordering, page: 1}))    
})) 
export default useGameQuery
