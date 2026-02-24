import { SortOption } from "@/models/SortOption";
import useSortOption from "@/services/hooks/useSortOption";
import { Button, Menu, Portal, Spinner, Text } from "@chakra-ui/react";
import { FC, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
type Props = {
  sortOption: SortOption | null;
  onSortSelect: (sort: SortOption | null) => void;
};
const isLoading = false;
const error = "";
const SortSelector: FC<Props> = ({ sortOption, onSortSelect }) => {
  const sortOptions = useSortOption();
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
              maxW={{ base: "116px", sm: "none" }}
              px={{ base: 1.5, sm: 3 }}
              onClick={() => setIsOpen(!isOpen)}
            >
              <Text truncate maxW="100%">
                {sortOption?.name || "No Ordering"}
              </Text>
              {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </Button>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                {sortOptions.map((so) => (
                  <Menu.Item
                    key={so?.id}
                    value={so.value || ""}
                    onClick={() => {
                      onSortSelect(so);
                      setIsOpen(!isOpen);
                    }}
                  >
                    {so?.name || "No Ordering"}
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

export default SortSelector;
