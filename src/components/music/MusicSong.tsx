import React from "react";

import './MusicSong.scss'
import {Song} from "../../types/Song";
import {truncate} from "lodash-es";

interface Props {
    song: Song
}

const MusicSong: React.FC<Props> = (props) => {
    const { song } = props
    const songTitleLen = 100
    const albumTitleLen = 50

    // const printSongTitle = useMemo(() => (song: Song): string => {
    //         const songTitle = song.artistName + ' - ' + song.songName
    //         return truncate(songTitle, {length: songTitleLen})
    //     },
    //     [song.artistName, song.songName]
    // )

    const printSongTitle = (song: Song): string => {
        const songTitle = song.artistName + ' - ' + song.songName
        return truncate(songTitle, {length: songTitleLen})
    }

    const printAlbumTitle = (song: Song): string => {
            const albumTitle = song.albumName
            return truncate(albumTitle, {length: albumTitleLen})
    }

    return (
        <div className="song-container">
            <div className="song-item">
                <h2>{printSongTitle(song)}</h2>
                <div className="song-player">
                    {song.artwork && (
                        <img src={song.artwork} alt="album cover"/>
                    )}
                    <audio controls src={song.audioFile}/>
                </div>
            </div>
            <footer className="song-footer">{printAlbumTitle(song)}</footer>
        </div>
    )
}

export default MusicSong