const express = require("express");
const socketIo = require("socket.io");
const dotenv = require("dotenv");
const logger = require("morgan");
const helmet = require("helmet");
const cookieParser = require("cookie-parser");
const path = require("path");

dotenv.config();
const app = express();

app.use(helmet());
app.use(logger("dev"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "static")));

const server = app.listen(4000, () => {
	console.log(`✅ server listen http://localhost:4000`);
});

const io = socketIo(server);
const clientMap = {};

io.on("connection", (socket) => {
    console.log("✅ Socket Connect");

    clientMap[socket.id] = socket;
    
    socket.on("sendMsg", (data) => {
        console.log("==== SendMsg Event ====");
        io.emit("sendMsg", data);
    });

    socket.on("close", () => {
        delete clientMap[socket.id];
    });
});