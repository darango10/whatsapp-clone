import React, {useEffect, useState} from 'react';
import '../styles/chat.css'
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';
import MicOutlinedIcon from '@material-ui/icons/MicOutlined';
import {useParams} from 'react-router-dom'
import db from "../firebase";
import {useStateValue} from "../StateProvider";
import firebase from "firebase";

const Chat = () => {

    const [seed, setSeed] = useState(null);
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [roomName, setRoomName] = useState('');
    const {roomId} = useParams();
    const [{user}, dispatch] = useStateValue();

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [roomId]);

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => {
                setRoomName(snapshot.data().name)
            })

            db.collection('rooms').doc(roomId)
                .collection('messages')
                .orderBy('timestamp', 'asc')
                .onSnapshot((snapshot) => {
                    setMessages(snapshot.docs.map((doc) => doc.data()))
                })
        }
    }, [roomId])

    const sendMessage = (e) => {
        e.preventDefault();
        db.collection('rooms').doc(roomId)
            .collection('messages').add({
            name: user.displayName,
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setInput('')
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>Last seen {new Date(
                        messages[messages.length - 1]?.timestamp?.toDate()).toLocaleString('es-CO')}</p>
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

                {messages.map((message, index) => (
                    <p key={index} className={`chat__message ${message.name === user.displayName && 'chat__receiver'}`}>
                        <span className="chat__name">{message.name}</span>
                        {message.message}
                        <span className="chat__timestamp">
                            {new Date(message.timestamp?.toDate()).toLocaleString('es-CO')}
                        </span>
                    </p>
                ))}


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
