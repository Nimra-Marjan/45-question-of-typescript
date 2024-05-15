function album(albumSinger:string, albumSong:string, albumtracks? : number){
    let playlist :{playlistSinger: string , playlistSong: string ,Tracks?:number } = {
     playlistSinger :albumSinger,
     playlistSong : albumSong
    };
    if(albumtracks !== undefined ){
    playlist.Tracks = albumtracks
    }
    return  playlist;     
}
console.log(album("jiya" , "anjansong"));
console.log(album("biaa" , "zindagyi"));
console.log(album("disha" , "urhaan" , 5));