const socket = io("http://localhost:4000");

const chatForm = document.getElementById("chatForm");
const chatTextarea = document.getElementById("chatTextarea");
const chatFormBtn= document.getElementById("chatFormbtn")

chatFormBtn.addEventListener("click", (event) => {
    event.preventDefault();
    
    socket.emit("sendMsg", { msg: chatTextarea.value });
    
});
/**
 * socket io event
 */
socket.on("sendMsg",(data) => {
    console.log(data);
});