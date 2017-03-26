var rest = require("restler");
var Favourite = require("../../models/favourite");
var async = require("async");
var options = require("../../../options.js");

var key = options.MOVIEDB_KEY;
var param = "?api_key=" + key;
var base = "https://api.themoviedb.org/3/";

function getAllFavourites(req, res){
  Favourite.find({user_id: req.params.id}, function(err, result){
    if (err) return res.status(403).json({message: "error", response: err});
    async.map(result, getAllMoviesBasedFavourite, function(err, resp){
      if (err) return res.send(403).json({message: "error", response: err});
      return res.json({message: "success", response: resp});
    });
  })
}

function createFavourite (req, res){
  Favourite.findOne({movie_id: req.body.movie_id, user_id: req.body.user_id}, function(err, result){

    if (!result){
      Favourite.create({
        movie_id: req.body.movie_id,
        type: req.body.type,
        user_id: req.body.user_id
      }, function(err, result){
          if (err) return res.status(403).json({message: "error", response: err});
          console.log(result);
          return res.json({message: "success"});
      })
    } else {
      return res.status(403).json({"message": "already favourited, cannot duplicate"});
    }
  });
}

function deleteFavourite(req, res){
  Favourite.remove({movie_id: req.body.movie_id}, function(err, result){
    if (err) return res.status(403).json({message: "error", response: err});
    return res.json({message: "success", response: result});
  });
}

function getAllMoviesBasedFavourite(data, callback){
    var id = data.movie_id;
    var type = (data.type === "movie")? "movie/" : "tv/";
    var api = base + type + id + param;
    rest.get(api).on("complete", function(resp){
      resp.type = data.type;
      callback(null, resp)
    }).on("error", function(err){
      console.log(err);
    });
}

module.exports = {
  show: getAllFavourites,
  create: createFavourite,
  delete: deleteFavourite
}
