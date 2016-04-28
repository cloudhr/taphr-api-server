var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.status(200).json({
    status:'ok',
    message:'API Server is running just fine',
    lastUpdated:new Date()
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
