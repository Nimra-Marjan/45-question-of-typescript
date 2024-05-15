function album(albumSinger, albumSong, albumtracks) {
    var playlist = {
        playlistSinger: albumSinger,
        playlistSong: albumSong
    };
    if (albumtracks !== undefined) {
        playlist.Tracks = albumtracks;
    }
    return playlist;
}
console.log(album("jiya", "anjansong"));
console.log(album("biaa", "zindagyi"));
console.log(album("disha", "urhaan", 5));
