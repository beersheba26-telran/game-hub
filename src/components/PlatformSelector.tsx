import React, {FC} from 'react'
type Props = {
    parentPlatformSlug: string | null,
    onPlatformSelect: (platform: string) => void
}
const PlatformSelector: FC<Props> = ({parentPlatformSlug}) => {
    //TODO
    //Chakra-ui component Menu
    //Button for opening should have either parent platform name or "Platforms"
    //For closed menu there should be react icon FaChavronDown
    //For opened menu there should be react icon FaChvronUp
    //for getting all platforms to use usePlatform triggering query https://api.rawg.io/api/platforms/lists/parents similar to useGenre 
  return (
    <div>
      
    </div>
  )
}

export default PlatformSelector
