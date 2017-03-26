var path = require("path");

function getIndex(req, res){
  console.log(req.originalUrl);
  res.sendFile(path.resolve('./index.html'));
}

module.exports = {
  index: getIndex
}
