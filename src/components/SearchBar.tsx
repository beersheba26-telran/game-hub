import { Box, InputGroup, Input } from '@chakra-ui/react'
import { FC, useRef } from 'react'
import { LuSearch } from 'react-icons/lu'
type Props = {
    onSubmitSearchText: (text: string) => void
}
const SearchBar:FC<Props> = ({onSubmitSearchText}) => {
    const inputElement = useRef<HTMLInputElement>(null)
  return (
    <Box as="form" onSubmit={event => {
        event.preventDefault();
        onSubmitSearchText(inputElement.current?.value ?? "")
    }}>
        <InputGroup startElement={<LuSearch/>}>
            <Input ref={inputElement} placeholder='Search games...' borderRadius={"30px"}/>
        </InputGroup>
      
    </Box>
  )
}

export default SearchBar
