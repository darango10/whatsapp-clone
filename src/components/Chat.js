import React, {useEffect, useState} from 'react';
import '../styles/chat.css'
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';

const Chat = () => {

    const [seed, setSeed] = useState(null);
    const [input, setInput] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    const sendMessage = (e) => {
        e.preventDefault();
        alert(input)
        setInput('')
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at ...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <AttachFileOutlinedIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">

                <p className={`chat__message ${true && 'chat__receiver'}`}>
                    <span className="chat__name">Daniel Arango</span>
                    Hey Guys
                    <span className="chat__timestamp">3:52pm</span>
                </p>

            </div>

            <div className="chat__footer">
                <IconButton>
                    <EmojiEmotionsOutlinedIcon/>
                </IconButton>
                <form onSubmit={sendMessage}>
                    <input
                        type="text"
                        placeholder="Type a message"
                        autoComplete={'off'}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <button type="submit">SEND</button>
                </form>
                <IconButton>
                    <MicOutlinedIcon/>
                </IconButton>
            </div>
        </div>
    );
};

export default Chat;
