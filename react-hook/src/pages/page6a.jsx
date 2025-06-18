import React, {useEffect, useState } from "react"
import ChatRoom from "../Components/ChatRoom"

function page6a(){
    // general , travel, friends ,family
    const [roomId,setRoomId] = useState(`general`)
    const [view,setView] = useState(false)

        const roomhandler =(e) => {
            if(e.target.value !== "null"){
                setRoomId(e.target.value)
            }
        }

    return(
        <div className="container">
            <h1>useEffect (chat server)</h1>

        <div className="blk">
            <div>
            <label htmlFor="">Choose chat room id</label>
            <select name="roomId" id="roomId" value={roomId} onChange={roomhandler}
            className="form-item">
                <option value="null">Select Id</option>
                <option>General</option>
                <option>travel</option>
                <option>friends</option>
                <option>family</option>
            </select>
        </div>
        
        <div className="blk">
            <button className={view ? "btn danger": " btn success"} onClick={()=> setView (!view)}>
                { view ? "close chat" : "open chat"}
            </button>
        </div>

        <div className="blk">
            {
                view && <ChatRoom roomId ={roomId} />
            }
        </div>
    </div>
</div>
    )
}
export default ChatRoom;