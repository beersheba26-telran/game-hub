import useGameQuery from '@/state-managemenr/store'
import { Box, InputGroup, Input } from '@chakra-ui/react'
import { FC, useRef } from 'react'
import { LuSearch } from 'react-icons/lu'

const SearchBar:FC = () => {
    const inputElement = useRef<HTMLInputElement>(null)
    const setSearchText = useGameQuery(s => s.setSearchStr)
  return (
    <Box as="form" width={{
        base: "80%",
        sm: "100%"
    }} onSubmit={event => {
        event.preventDefault();
        setSearchText(inputElement.current?.value ?? "")
    }}>
        <InputGroup startElement={<LuSearch/>}>
            <Input ref={inputElement} placeholder='Search games...' borderRadius={"30px"} borderWidth={"2px"}/>
        </InputGroup>
      
    </Box>
  )
}

export default SearchBar
