import React, {ChangeEvent, FormEvent, useRef} from 'react'
import { debounce } from 'lodash-es'

import './MusicSearchForm.scss'

interface Props {
    onSearch: (query: string) => void
}

const MusicSearchForm: React.FC<Props> = (props) => {
    const searchInput = useRef<HTMLInputElement>(null)

    const handleSearchInput = debounce((e: ChangeEvent<HTMLInputElement>) => {
        searchSong()
    }, 500)

    const handleSearchSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        searchSong()
    }

    const searchSong = () => {
        let searchString = searchInput.current?.value
        if(searchString) props.onSearch(searchString)
    }

    return (
        <div>
            <form onSubmit={handleSearchSubmit}>
                <input
                    autoFocus
                    className="searchBar"
                    type="text"
                    ref={searchInput}
                    onChange={handleSearchInput}
                />
            </form>
        </div>
    )
}

export default MusicSearchForm