var express = require('express');
const { Image, createCanvas } = require('canvas')

var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/merge', (req, res) => {
	const { x, y, str } = req.body;

	const image = new Image();
	image.src = req.body.image;

	console.info('Image Size:', image.width, ',', image.height);

	const canvas = createCanvas(image.width, image.height);
	const ctx = canvas.getContext('2d');
 	ctx.drawImage(image, 0, 0);

	ctx.fillText(str, x, y);
	const imgStr = canvas.toDataURL("image/jpeg");
	
	res.send({
		result_image: imgStr
	});
})

module.exports = router;
