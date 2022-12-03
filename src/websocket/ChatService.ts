import { io } from "../http";

io.on("connect", (socket) => {
  socket.emit("chat_started", {
    message: "your chat has been started",
  });
});
