const { app, BrowserWindow } = require('electron')
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const morgan = require('morgan');
const path = require('path');

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
application.use('/api/owners', require('./routes/owner.routes'));
application.use('/api/employees', require('./routes/employee.routes'));
application.use('/api/parkings', require('./routes/parking.routes'));
application.use('/api/warehouses', require('./routes/warehouse.routes'));
const server = http.createServer(application);
application.set('port', process.env.PORT || 3000);
//Configuracion de Socket.io para la actulizacion en tiempo real de los clientes
const io = socketIo(server);

io.on('connection', socket => {
    console.log('socket connected: ', socket.id);
});

application.use(webpackMiddleware(webpack(config)));

application.use(express.static(path.join(__dirname, 'public')));
server.listen(application.get('port'), () => {
    console.log(`Server on port ${application.get('port')}`)
});

let win

function createWindow() {
    // Crea la ventana del navegador.
    win = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // Carga la aplicacion desde localhost (se podria dejar con un puerto variable)
    win.loadURL('http://localhost:3000')

    // Abre las herramientas de desarrollo (DevTools).
    win.webContents.openDevTools()

    // Emitido cuando la ventana es cerrada.
    win.on('closed', () => {
        // Elimina la referencia al objeto window, normalmente  guardarías las ventanas
        // en un vector si tu aplicación soporta múltiples ventanas, este es el momento
        // en el que deberías borrar el elemento correspondiente.
        win = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    // En macOS es común para las aplicaciones y sus barras de menú
    // que estén activas hasta que el usuario salga explicitamente con Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // En macOS es común volver a crear una ventana en la aplicación cuando el
    // icono del dock es clicado y no hay otras ventanas abiertas.
    if (win === null) {
        createWindow()
    }
})



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

