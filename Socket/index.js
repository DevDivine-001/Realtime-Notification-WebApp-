import { Server } from "socket.io";

const io = new Server({
    cors: {
        origin: "http://localhost:5173", // Change this if you deploy to a different domain
    },
});

let OnLinesUsers = [];

const addNewUser = (username, socketId) => {
    // Check if the user already exists to avoid duplicates
    if (!OnLinesUsers.some((user) => user.username === username)) {
        OnLinesUsers.push({ username, socketId });
        console.log(`User ${username} connected`);

    }
};

const removeUser = (socketId) => {
    OnLinesUsers = OnLinesUsers.filter((user) => user.socketId !== socketId);
    console.log("User disconnected");
};

const getUser = (username) => {
    return OnLinesUsers.find((user) => user.username === username);
};

io.on("connection", (socket) => {
    console.log("A user connected!");

    // Handle new user connection
    socket.on("newUser", (username) => {
        addNewUser(username, socket.id);
    });

    //     // Handle sending notifications
    socket.on("sendNotification", ({ senderName, receiverName, type }) => {
        const receiver = getUser(receiverName);
        if (receiver) {
            // Emit notification to the specific receiver
            io.to(receiver.socketId).emit("getNotification", { senderName, type });
            console.log(`Notification sent from ${senderName} to ${receiverName} of type ${type}`);
        } else {
            console.log(`User ${receiverName} not found`);
        }
    });


    socket.on("sendText", ({ senderName, receiverName, text }) => {
        const receiver = getUser(receiverName)
        io.to(receiver.socketId).emit("getNotification", {
            senderName,
            text
        })
    })


    // Handle user disconnection
    socket.on("disconnect", () => {
        removeUser(socket.id);
    });

    //     // Testing event emission
    io.emit("firstEvent", "Hello, this is a test event!");

    // You can also add more events and their handlers as needed
});

io.listen(5000);
console.log("Socket.io server listening on port 5000");

