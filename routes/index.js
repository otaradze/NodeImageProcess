var express = require('express');
const { Image } = require('canvas')

var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/merge', (req, res) => {
	const image = new Image();
	image.src = req.body.image;
	console.info('Image Size:', image.width);
	res.send('OK');
})

module.exports = router;
