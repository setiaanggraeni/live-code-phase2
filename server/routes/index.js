var express = require('express');
var router = express.Router();
const {register, requestToken, items, query, getAllItems} = require('../controllers/userController')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/register', register)
router.post('/request_token', requestToken)
router.post('/items', items)
router.get('/items', getAllItems)
router.get('/items', query)

module.exports = router;
