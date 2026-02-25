import { SortOption } from "@/models/SortOption";
import useSortOption from "@/services/hooks/useSortOption";
import { Button, Menu, Portal, Spinner, Text } from "@chakra-ui/react";
import { FC, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import MenuSelector from "./MenuSelector";
type Props = {
  sortOption: SortOption | null;
  onSortSelect: (sort: SortOption | null) => void;
};
const isLoading = false;
const error = "";
const SortSelector: FC<Props> = ({ sortOption, onSortSelect }) => {
  const sortOptions = useSortOption();
  return (
    <>
      {isLoading && <Spinner></Spinner>}
      {!error && (
        <MenuSelector items={sortOptions.map(so => ({name: so.name, value: so.value}))}
        onItemSelect={(item) => onSortSelect({id: 0, value: item.value, name: item.name}) }
        defaultName="No Ordering" selectedItemValue={sortOption?.name || null}></MenuSelector>
       
      )}
    </>
  );
};

export default SortSelector;
