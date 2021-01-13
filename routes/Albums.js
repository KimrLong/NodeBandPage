

const express = require('express');
const router = express.Router();
let dataFile = require('../data/data.json')


router.get('/Albums',(req,res)=>{
     //code and then res.render

    // console.log(dataFile)
    const albums = dataFile.albums;
    const artist = albums[0].name;

    let albumCovers = []; //populate with all of the artwork
    let albumNames = [];
    let hrefsAM = [];

    albums.forEach(albumObj=>{

        albumCovers = albumCovers.concat(albumObj.artwork)
        hrefsAM = hrefsAM.concat(albumObj.appleMusic)
        albumNames = albumNames.concat(albumObj.albumname)

    })

    res.render('Albums',{
        albums:albums,
        artwork: albumCovers,
        albumnames: albumNames,
        artist: artist,
        hrefsAM: hrefsAM,
    })
})

router.get('/Albums/:Albumsid',(req,res)=>{

    let albumArray = dataFile.albums; 
    let albumShort = req.params.albumsid;

    let albums = [];
    let trackArray = [];

    albumArray.forEach(albumObj=>{

        if(albumObj.shortname == albumShort)
        {
            let fullList = albumObj.tracklist;
            trackArray = fullList.split('<br>');

            albums.push(albumObj);
        }
    })

    res.render('Albums',{
        albums: albums,
        tracks: trackArray
    })
})

module.exports = router;