var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.status(200).json({
    status:'ok',
    message:'API Server is running fine',
    lastUpdated:new Date(),
    code:200
  });
});

router.route('/health')
    .get(function(req, res, next){
  res.status(200).json({
    status:'ok',
    message:'API Server is healthy',
    code:200
  });
}).head(function(req, res, next){
  res.status(200).json({
    status:'ok',
    code:200
  });
});

module.exports = router;
