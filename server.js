const express = require('express');
const fs = require('fs');
const https = require('https');

const app = express();

// Serve the AR app
app.use(express.static('src'));

// Run the server with SSL certificates
https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, app).listen(8081, function () {
    console.log('Server is running on https://localhost:8081');
});
