import useGenre from "@/services/hooks/useGenre";
import { Button, Menu, Portal, Spinner, Text } from "@chakra-ui/react";
import { FC, useMemo, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import MenuSelector from "./MenuSelector";
type Props = {
  onGenreSelect: (genre: string | null) => void;
  genre: string | null;
};
const GenreSelector: FC<Props> = ({ genre, onGenreSelect }) => {
  const { error, data: genres, isLoading } = useGenre();
  
  return (
    <>
      {isLoading && <Spinner></Spinner>}
      {!error && (
        <MenuSelector onItemSelect={item => onGenreSelect(item.value)}
         items={genres.map(g => ({value: g.slug, name: g.name}))} defaultName="Genres"
          selectedItemValue={genre}/>
    
      )}
    </>
  );
};

export default GenreSelector;
