var express = require('express');
var router = express.Router();

router.post('/recognize', function(request, response) {
  response.send({ user: { name: 'David' } });
});

module.exports = router;
