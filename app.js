import { db } from "./config.js";
import{ref,push, onChildAdded} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";

document.addEventListener("DOMContentLoaded",() => {
    //Get DOM content or Dom Elements;
    const messageInput = document.getElementById('message-input');
    const sendBtn = document.getElementById('send-button');
    const logoutBtn = document.getElementById('logout-button');
    const msgContainer = document.getElementById('messages');

    // Get Name For 
    const savedName = localStorage.getItem("name");
    if(!savedName) {
        const newName = prompt("Enter your Name kindly!").trim();
        if(newName){
            localStorage.setItem("name", newName)
        } else{
            window.location.reload();
        }
    }
    logoutBtn.addEventListener('click', () => {
        // location= "./google.com"
   localStorage.removeItem("name");
   window.location.reload();    
    })

    const sendMsg = () => {
       const name = localStorage.getItem("name");
       const message = messageInput.value.trim();
       if(name && message ) {
        const messagesRef = ref (db,"messages")
        push(messagesRef, {
            name: name,
            message: message,
            timestamp: new Date().getTime(),
        });
        messageInput.value = "";
       }
    };
    //send btn
    sendBtn.addEventListener('click', sendMsg);
 //on enter key 
    messageInput.addEventListener('keypress', event => {
        if(event.key === "Enter"){
            sendMsg();
        }
    })

const addMsg =( name, msg) => {
    const msgDiv =document.createElement('div');
    msgDiv.innerHTML = `<b> ${name} : </b> ${msg}`
    msgContainer.appendChild(msgDiv)
    msgContainer.scrollTop = msgContainer.scrollHeight;
}
const messagesRef = ref(db, "messages")
onChildAdded(messagesRef, (snapshot) => {
    const messageData = snapshot.val()
    addMsg(messageData.name, messageData.message);
})

} )


