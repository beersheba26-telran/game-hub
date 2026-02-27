import usePlatform from "@/services/hooks/useParentPlatforms";
import { Spinner} from "@chakra-ui/react";
import { FC} from "react";
import MenuSelector from "./MenuSelector";
import useGameQuery from "@/state-managemenr/store";

const PlatformSelector: FC = () => {
  const { error, data: platforms, isLoading } = usePlatform();
  const setPlatform = useGameQuery(s => s.setParentPlatform)
  const parentPlatform = useGameQuery(s => s.parentPlatform)
  return (
    <>
      {isLoading && <Spinner></Spinner>}
      {!error && (
        <MenuSelector items={platforms.map(p => ({value: p.slug, name: p.name}))} 
        onItemSelect={item => setPlatform(platforms.find(p => p.slug == item.value)!)}
        selectedItemValue={parentPlatform?.slug || null} defaultName="Platforms"></MenuSelector>
   
       )}
     </>
  );
};

export default PlatformSelector;
