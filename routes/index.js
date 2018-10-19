var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/merge', (req, res) => {
	const image = req.body.image // base64
	
})






module.exports = router;
