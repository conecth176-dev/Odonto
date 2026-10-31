const { startServer } = require('./server/app');

const PORT = process.env.PORT || 3000;
startServer(PORT);
