const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const path = require('path');

//webpack
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config')

const app = express();
const server = http.createServer(app);
const io = socketIo(server);



app.use(webpackMiddleware(webpack(config)));

app.use(express.static(path.join(__dirname, 'public')));
server.listen(3000, () => console.log('server on port 3000'));

io.on('connection', socket => {
    console.log('socket connected: ', socket.id);
});


const SerialPort = require('serialport');
const ReadLine = SerialPort.parsers.Readline;

const port = new SerialPort("/dev/ttyUSB0", {
    baudRate: 115200
});

const parser = port.pipe(new ReadLine({ delimiter: '\r\n' }));

parser.on('open', function () {
    console.log('connection is opened');
});

parser.on('data', function (data) {
    console.log(data);
    io.emit('arduino', data.toString());
});

parser.on('error', (err) => console.log(err));
port.on('error', (err) => console.log(err));