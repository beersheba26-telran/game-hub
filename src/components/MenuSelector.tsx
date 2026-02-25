import { MenuItem } from '@/models/MenuItem';
import { Button, Menu, Portal, Text } from '@chakra-ui/react';
import  { FC, useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
type Props = {
   onItemSelect: (item: MenuItem)=>void,
   items: MenuItem[]
   selectedItemValue: string|null
   defaultName: string
}
const MenuSelector: FC<Props> = ({onItemSelect, items, selectedItemValue, defaultName}) => {
     const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
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
                    {selectedItemValue || defaultName}
                  </Text>
                  {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                </Button>
              </Menu.Trigger>
              <Portal>
                <Menu.Positioner>
                  <Menu.Content>
                    {items.map((item) => (
                      <Menu.Item
                        key={item?.value}
                        value={item.name || ""}
                        onClick={() => {
                          onItemSelect(item);
                          setIsOpen(false);
                        }}
                      >
                        {item?.name || defaultName}
                      </Menu.Item>
                    ))}
                  </Menu.Content>
                </Menu.Positioner>
              </Portal>
            </Menu.Root>
          )}
      

export default MenuSelector
