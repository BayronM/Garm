const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const morgan = require('morgan');
const path = require('path');
const historyApiFallback = require('connect-history-api-fallback');

const { mongoose } = require('./database');

//Configuracion de Webpack(para enviar los archivos necesarios al cliente)
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const config = require('../webpack.config')


const application = express();
application.use(morgan('dev'));
application.use(express.json());

//Routes
application.use('/api/apartments', require('./routes/apartment.routes'));

const server = http.createServer(application);
application.set('port', process.env.PORT || 3000);
//Configuracion de Socket.io para la actulizacion en tiempo real de los clientes
const io = socketIo(server);

io.on('connection', socket => {
    console.log('socket connected: ', socket.id);
});
application.use(historyApiFallback());
application.use(webpackMiddleware(webpack(config)));

application.use(express.static(path.join(__dirname, 'public')));
server.listen(application.get('port'), () => {
    console.log(`Server on port ${application.get('port')}`)
});




//Conexion de Puerto serial
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
    io.emit('arduino', data.toString());
});

parser.on('error', (err) => console.log(err));
port.on('error', (err) => console.log(err));

