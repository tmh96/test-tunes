import React, {useState} from 'react'
import axios from 'axios';

import './Music.scss'
import MusicSearchForm from '../components/music/MusicSearchForm';
import MusicList from '../components/music/MusicList';
import {ITunesResponse} from "../responses/ITunesResponse";
import {Song} from "../types/Song";

const Music: React.FC = () => {
    const [songs, setSongs] = useState([])

    const handleSearch = (query: string) => {
        axios
            .get(
                `https://itunes.apple.com/search
				?term=${encodeURI(query)}
				&entity=musicTrack`
            )
            .then(response => {
                let results = response.data.results.filter(
                    (song: ITunesResponse) => song.kind === 'song'
                ).map((song: ITunesResponse) => extractData(song))
                setSongs(results)
            })
    }

    const extractData = ({
        trackId: id,
        artistName,
        trackName: songName,
        collectionName: albumName,
        previewUrl: audioFile,
        artworkUrl100: artwork
    }: ITunesResponse) => {
        return { id, artistName, songName, albumName, audioFile, artwork } as Song
    }

    return (
        <div className="music">
            <h1>YouTunes</h1>
            <MusicSearchForm onSearch={handleSearch}/>
            <MusicList songs={songs}/>
        </div>
    )
}

export default Music