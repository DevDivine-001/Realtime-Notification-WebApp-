

import { Server } from "socket.io"


const io = new Server({
    cors: {
        origin: "http://localhost:5173"
    }
});

io.on("connection", (socket) => {
    console.log("Someone has connected!")
    io.emit("firstEvent", "Hello this it test!")



    socket.on("disconnect", () => {
        console.log("someone has left")
    })

    // ...
});

io.listen(5000);
// console.log('Divine is in the cure')
