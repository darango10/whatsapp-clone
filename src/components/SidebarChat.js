import React, {useEffect, useState} from 'react';
import '../styles/sidebarChat.css'
import Avatar from "@material-ui/core/Avatar";

const SidebarChat = ({addNewChat}) => {

    const [seed, setSeed] = useState(null);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const createChat = () => {
        const roomName = prompt('Please enter name for chat')

        if (roomName.trim() !== '') {
            // do some database stuff
        }
    }


    return !addNewChat ? (
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="sidebar__chatInfo">
                    <h2>Room Name</h2>
                    <p>Last Message...</p>
                </div>
            </div>
        )
        : (
            <div className="sidebarChat" onClick={createChat}>
                <h2>Add New Chat</h2>
            </div>
        )
};

export default SidebarChat;
