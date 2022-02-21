import type {NextPage} from "next";
import {useRecoilValue} from "recoil";
import {playlistState} from "../atom/playListAtom";
import {songs} from "../data";
import Player from "@madzadev/audio-player";

const Songs: NextPage = () => {
    const tracks = [
        {
            url: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
            title: "Madza - Chords of Life",
            tags: ["house"],
        },
        {
            url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
            title: "Madza - Late Night Drive",
            tags: ["dnb"],
        },
        {
            url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
            title: "Madza - Persistence",
            tags: ["dubstep"],
        },
    ];
    const playlist = useRecoilValue(playlistState);
    return (
        <div className='text-white'>
            {/*<Player*/}
            {/*    trackList={tracks}*/}
            {/*    includeTags={true}*/}
            {/*    includeSearch={true}*/}
            {/*    showPlaylist={true}*/}
            {/*    autoPlayNextTrack={true}*/}
            {/*/>*/}
            {/*{songs.map((song) => (*/}
            {/*    <p>{song.titleMusic}</p>*/}
            {/*))}*/}
        </div>
    )
}

export default Songs;