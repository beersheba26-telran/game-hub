import { ParentPlatform } from "@/models/fetch-types";
import useData from "./useData";

export default function usePlatform(): {data:ParentPlatform[], isLoading: boolean, error: string} {
   const result =  useData<ParentPlatform>("/platforms/lists/parents")
   if (!result.error && !result.isLoading && result.data[0]?.id != -1) {
    result.data.unshift({ id: -1, slug: "platforms", name: "All platforms" })
    
   }
   return result
}