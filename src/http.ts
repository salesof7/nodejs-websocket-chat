import express from "express";
import path from "node:path";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";

async function dbConnect(): Promise<void> {
  await mongoose.connect("mongodb://localhost:27017/rocketsocket");
}
dbConnect().catch((error) => console.log(error));

const app = express();

const server = createServer(app);

app.use(express.static(path.join(__dirname, "..", "public")));

const io = new Server(server);

io.on("connection", (socket) => {
  console.log("socket", socket);
});

export { server, io };
