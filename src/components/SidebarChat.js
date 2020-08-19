import React, {useEffect, useState} from 'react';
import '../styles/sidebarChat.css'
import Avatar from "@material-ui/core/Avatar";

const SidebarChat = () => {

    const [seed, setSeed] = useState(null);

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);


    return (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebar__chat">
                <h2>Room Name</h2>
                <p>Last Message...</p>
            </div>
        </div>
    );
};

export default SidebarChat;
