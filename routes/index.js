const express = require('express');
const router = express.Router();
const bandFile = require('../data/band.json');

router.get('/', (req, res)=>{
    let pageBand = bandFile.band;

    // let bandArr = pageBand.map(bandObj=>{
    //     if (bandObj.name === req.params) { //bandid
    //         return bandObj
    //     }
    //     else {
    //         return bandObj
    //     }
    // });
    console.log(pageBand);
    res.render('index', {
        bandInfo: pageBand
    });
})

// router.get('/:rollid', (req, res)=>{
//     let rollBand = dataFile.band;

//     let rollArr = rollBand.map(rollObj=>{
//         if(rollObj.roll === req.params.rollid){
//             return rollObj
//         }
//         else{
//             return rollObj
//         }
//     }); 
//     res.render('index', {
//         rollArr: rollArr
//     });
// })

// module.exports = router;




    // let pagePhotos = [];
     // pageBand.forEach(bandObj =>{
    //     pagePhotos = pagePhotos.concat(bandObj.pictures)
    // })
    // let photos = [];
    // let bandInfo = [];
    // pageBand.map(bandObj=>{
        // if(bandObj.name === req.params.bandid){
        //     photos = bandObj.picture;
        //     bandInfo.push(bandObj); console.log('string')
        
        // } 
    //     bandInfo.push(bandObj);
    // })





// routes to the index ejs
// const express = require('express');

// const router = express.Router();

let dataFile = require('../data/data.json')

router.get('/',(req,res)=>{
    //code and then res.render
    let albums = dataFile.albums;
    let artist = albums[0].name;
    
    // albums.forEach(albumObj=>{
        
    // })

    res.render('index',{
        artist:artist,
        albums:albums
    });

})

module.exports = router;


