import sortOptions from "@/config/sort-options";
import { SortOption } from "@/models/SortOption";
import { useMemo } from "react";
export default function useSortOption(): SortOption[]{
    const options: SortOption[] = useMemo(() => sortOptions,[sortOptions])
    return options;
}