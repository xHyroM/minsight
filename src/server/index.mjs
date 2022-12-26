import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
    cors: {
        origin: '*'
    }
});
console.log(typeof io);

io.on("connection", (socket) => {
  // send a message to the client
  socket.emit("hello from server", 1, "2", { 3: Buffer.from([4]) });

  // receive a message from the client
  socket.on("hello from client", (...args) => {
    // ...
  });
});

setInterval(() => {
  io.emit('HEEEEEEEEEEEE ' + new Date().getTime());
}, 1000);

httpServer.listen(3001);