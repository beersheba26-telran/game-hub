import useSortOption from "@/services/hooks/useSortOption";
import { Spinner } from "@chakra-ui/react";
import { FC } from "react";
import MenuSelector from "./MenuSelector";
import useGameQuery from "@/state-managemenr/store";

const isLoading = false;
const error = "";
const SortSelector: FC = () => {
  const sortOptions = useSortOption();
  const setSortOption = useGameQuery(s => s.setOrdering)
  const sortOption = useGameQuery(s => s.ordering)
  return (
    <>
      {isLoading && <Spinner></Spinner>}
      {!error && (
        <MenuSelector items={sortOptions.map(so => ({name: so.name, value: so.value}))}
        onItemSelect={(item) => setSortOption({id: 0, value: item.value, name: item.name}) }
        defaultName="No Ordering" selectedItemValue={sortOption?.name || null}></MenuSelector>
       
      )}
    </>
  );
};

export default SortSelector;
