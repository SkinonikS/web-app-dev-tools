const express = require('express');
const chokidar = require('chokidar');
const path = require('path');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const port = process.env.PORT || 3000;

// Serve the index.html file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve the assets folder
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Create an HTTP server
const server = http.createServer(app);

// Create a Socket.IO instance and attach it to the server
const io = socketIo(server);

// Watch for changes in the assets folder
const assetsWatcher = chokidar.watch([path.join(__dirname, 'index.html'), path.join(__dirname, 'assets')]);

assetsWatcher.on('change', (filePath) => {
  console.log(`File ${filePath} has changed`);

  // Notify connected clients about the change using Socket.IO
  io.emit('reload');
});

// Start the main server
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});