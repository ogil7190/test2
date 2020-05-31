const DB_CONNECTION_URL = 'mongodb+srv://tester:test@789@cluster0-6cmbe.mongodb.net/test?retryWrites=true&w=majority';
const DB_NAME = process.env.IS_DEV ? 'test' : 'prod';

const DB = {
    DB_CONNECTION_URL,
    DB_NAME
};

module.exports = {
    DB
};