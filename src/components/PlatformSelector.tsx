import { ParentPlatform } from "@/models/fetch-types";
import usePlatform from "@/services/hooks/useParentPlatforms";
import { Spinner} from "@chakra-ui/react";
import { FC, useMemo} from "react";
import MenuSelector from "./MenuSelector";
type Props = {
  parentPlatform: ParentPlatform | null;
  onPlatformSelect: (platform: ParentPlatform | null) => void;
};
const PlatformSelector: FC<Props> = ({ parentPlatform, onPlatformSelect }) => {
  const { error, data: platforms, isLoading } = usePlatform();
  useMemo(
    () =>
      platforms[0]?.id >= 0 &&
      platforms.unshift({ id: -1, slug: "platforms", name: "All platforms" }),
    [platforms],
  );
  return (
    <>
      {isLoading && <Spinner></Spinner>}
      {!error && (
        <MenuSelector items={platforms.map(p => ({value: p.slug, name: p.name}))} 
        onItemSelect={item => onPlatformSelect(platforms.find(p => p.slug == item.value)!)}
        selectedItemValue={parentPlatform?.slug || null} defaultName="Platforms"></MenuSelector>
   
       )}
     </>
  );
};

export default PlatformSelector;
