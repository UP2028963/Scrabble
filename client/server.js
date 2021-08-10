// Adapted from https://github.com/portsoc/staged-simple-message-board/blob/master/stages/3/svr.js
const express = require('express');
const serveStatic = require('serve-static');

const app = express();

// serving in the public folder
app.use(serveStatic('./public'));

const port = 8080;
app.listen(port);
