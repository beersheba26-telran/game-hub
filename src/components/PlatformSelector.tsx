import { ParentPlatform } from '@/models/fetch-types';
import usePlatform from '@/services/hooks/useParentPlatforms';
import { Button, Menu, Portal, Spinner } from '@chakra-ui/react';
import  {FC, useMemo, useState} from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
type Props = {
    parentPlatform: ParentPlatform | null,
    onPlatformSelect: (platform: ParentPlatform | null) => void
}
const PlatformSelector: FC<Props> = ({parentPlatform, onPlatformSelect}) => {
   const {error, data:platforms, isLoading} = usePlatform();
   useMemo(() => platforms[0]?.id >= 0 && platforms.unshift({id: -1, slug: "platforms", name: "All platforms"}), [platforms])
  const [isOpen, setIsOpen] = useState<boolean>(false)
   return (
    <>
    
        {isLoading && <Spinner></Spinner>}
        {!error && <Menu.Root >
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm" marginBottom={3} onClick={()=>setIsOpen(!isOpen)}>
          {parentPlatform?.name || "Platforms"}
          {isOpen? <FaChevronUp/>: <FaChevronDown/>}
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            
            {platforms.map(p => <Menu.Item key={p?.id} value={p.slug || ""}
             onClick={() => onPlatformSelect(p)}>{p?.name||"Platforms"}</Menu.Item>)}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>}
    </>
    
  )
}

export default PlatformSelector
