import { ParentPlatform } from "@/models/fetch-types";
import useData from "./useData";

export default function usePlatform() {
    return useData<ParentPlatform>("/platforms/lists/parents")
}