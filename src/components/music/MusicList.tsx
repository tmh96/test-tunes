import React from 'react'

import './MusicList.scss'
import {Song} from '../../types/Song';
import MusicSong from "./MusicSong";
import {CSSTransition, TransitionGroup} from "react-transition-group";

interface Props {
    songs: Song[]
}

const MusicList: React.FC<Props> = (props) => {
    const { songs } = props

    return (

        <TransitionGroup component="ul" className="music-list">
            {songs.map(item => (
                <CSSTransition key={item.id} timeout={200} classNames="song-container">
                    <li key={item.id}>
                        <MusicSong song={item}/>
                    </li>
                </CSSTransition>
            ))}
        </TransitionGroup>

    )
}

export default MusicList