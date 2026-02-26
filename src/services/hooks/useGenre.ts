import { Genre } from "@/models/fetch-types";
import useData from "./useData";

export default function useGenre(): {data:Genre[], isLoading: boolean, error: string} {
    const result = useData<Genre>("genres")
    if (!result.error && !result.isLoading && result.data[0]?.id != -1) {
    result.data.unshift({ id: -1,games_count: 0,image_background:"", name: "All genres", slug: null})
    
   }
    return result;
}