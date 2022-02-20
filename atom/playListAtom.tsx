import { atom } from "recoil";

export const playlistState = atom({
   key: "playlistState",
   default: null,
});

export const playListIdState = atom({
    key: "playlistIdState",
    default: '3'
});