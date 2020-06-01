const { DB } = require('./constants');
const { configure } = require('test-worker-module');

(async () => {
	await configure({
		connectionUrl: DB.DB_CONNECTION_URL,
		dbName: DB.DB_NAME
	});
})();