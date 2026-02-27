import useGenre from "@/services/hooks/useGenre";
import {  Spinner} from "@chakra-ui/react";
import { FC} from "react";
import MenuSelector from "./MenuSelector";
import useGameQuery from "@/state-managemenr/store";

const GenreSelector: FC = () => {
  const { error, data: genres, isLoading } = useGenre();
  const setGenre = useGameQuery(s => s.setGenre)
  const genre = useGameQuery(s => s.genreSlug)
  return (
    <>
      {isLoading && <Spinner></Spinner>}
      {!error && (
        <MenuSelector onItemSelect={item => setGenre(item.value)}
         items={genres.map(g => ({value: g.slug, name: g.name}))} defaultName="Genres"
          selectedItemValue={genre}/>
    
      )}
    </>
  );
};

export default GenreSelector;
