
const { request , response } = require("express");
const { comics } = require("../comics");

const getComics = ( req = request , res = response )=> {
    
    return res.json({
        comics:comics
    });
}

const getComicsById = (req = request , res = response) => {


    const id = req.params.id;

    let comicS = "";

    comicS = comics.find(( comic )=> {
        return comic.id === id;
    })

    if(comicS){
        return res.json({
            ok:true,
            comicS,
            statusCode:200
        });
    }else{
        return res.json({
            ok:false,
            msg:"Error , no hay un comic con ese id",
            statusCode:404
        });
    }

}


module.exports = {
    getComics,
    getComicsById
}