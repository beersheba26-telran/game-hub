import useGenre from "@/services/hooks/useGenre";
import { Button, Menu, Portal, Spinner, Text } from "@chakra-ui/react";
import { FC, useMemo, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
type Props = {
  onGenreSelect: (genre: string | null) => void;
  genre: string | null;
};
const GenreSelector: FC<Props> = ({ genre, onGenreSelect }) => {
  const { error, data: genres, isLoading } = useGenre();
  useMemo(
    () =>
      genres[0]?.id >= 0 &&
      genres.unshift({
        id: -1,
        games_count: 0,
        image_background: "",
        name: "All genres",
        slug: null,
      }),
    [genres],
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      {isLoading && <Spinner></Spinner>}
      {!error && (
        <Menu.Root>
          <Menu.Trigger asChild>
            <Button
              variant="outline"
              size={{ base: "xs", sm: "sm" }}
              marginBottom={{ base: 2, sm: 0, md: 3 }}
              width="auto"
              minW={0}
              maxW={{ base: "112px", sm: "none" }}
              px={{ base: 1.5, sm: 3 }}
              onClick={() => setIsOpen(!isOpen)}
            >
              <Text truncate maxW="100%">
                {genre || "Genres"}
              </Text>
              {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </Button>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                {genres.map((g) => (
                  <Menu.Item
                    key={g?.id}
                    value={g.slug || ""}
                    onClick={() => {onGenreSelect(g.slug); setIsOpen(!isOpen)}}
                  >
                    {g?.name || "Genres"}
                  </Menu.Item>
                ))}
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      )}
    </>
  );
};

export default GenreSelector;
