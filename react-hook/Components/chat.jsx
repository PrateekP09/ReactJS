import React from "react";

function Chat(url,roomId){
    return{

        connect(){
            console.log(`connecting to ${roomId}, room at ${url}. . .`)
        },
        disconnect(){
            console.log(`disconnected from ${roomId}, room at ${url}. . .`)
        }
    }
}

export default Chat