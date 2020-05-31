const express = require('express')
const router = express.Router();
const { getSS } = require('test-worker-module');

router.get('/test', (req, res) => {
	res.json({
		'success': true
	});
});

router.get('/ss', async (req, res) => {
	const data = await getSS();
	if( data ) {
		const img = Buffer.from(data, 'base64');
		res.writeHead(200, {
			'Content-Type': 'image/png',
			'Content-Length': img.length
		});
		return res.end(img);	
	} else {
		return res.json({
			'success': false,
			"error": "Either worker is not working on something or something went wrong."
		});
	}
});

module.exports = {
	router
}