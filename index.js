const express = require('express');
const bodyParser = require('body-parser');
const { router } = require('./routes');
const { DB } = require('./constants');
const { configure } = require('test-worker-module');

const PORT = process.env.PORT || 3000;
const app = express();
app.use(bodyParser.json());
app.use(router);
app.listen(PORT);

(async () => {
	await configure({
		connectionUrl: DB.DB_CONNECTION_URL,
		dbName: DB.DB_NAME
	});
})();

console.log(`Server started at http://localhost:${PORT}`);