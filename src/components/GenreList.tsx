import { FetchResponse, Genre } from '@/models/fetch-types'
import apiClient from '@/services/app-client'
import React from 'react'

const GenreList = () => {
    const [genres, setGenres] = React.useState<Genre[]>([])
        React.useEffect(() => {
            apiClient.get<FetchResponse<Genre>>('genres').then(res => setGenres(res.data.results))
        },[])
  return (
    <ul>
      {genres.map(g => <li key={g.id}>{g.name}</li>)}
    </ul>
  )
}

export default GenreList
