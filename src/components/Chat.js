import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import InfoIcon from '@material-ui/icons/Info';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import db from '../firebase';
import { useParams } from 'react-router-dom';
import firebase from 'firebase';



function Chat({ user }) {

    let { channelId } = useParams();
    const [channel, setChannel] = useState();
    const [messages, setMessages] = useState([])

    const getMessages = () => {

        db.collection('rooms')
            .doc(channelId)
            .collection('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot((snapshot) => {
                let messages = snapshot.docs.map((doc) => doc.data());
                setMessages(messages);
            })
    }

    const sendMessage = (text) => {

        if (channelId) {

            let payload = {
                text: text,
                timestamp: firebase.firestore.Timestamp.now(),
                user: user.name,
                userImage: user.photo
            }
            db.collection("rooms").doc(channelId).collection('messages').add(payload);
        }
    }

    const getChannel = () => {
        db.collection('rooms')
            .doc(channelId)
            .onSnapshot((snapshot) => {
                setChannel(snapshot.data());
            })
    }

    useEffect(() => {
        getChannel();
        getMessages();
    }, [channelId])

    return (
        <Container>
            <Header>
                <Channel>
                    <ChannelName>
                        ❌ {channel && channel.name}
                    </ChannelName>
                    <ChannelInfo>
                        Press SEND button to send messages.App is still on work.Make new groups and Have fun😀😎
                    </ChannelInfo>

                </Channel>

                <ChannelDetails>
                    <div>
                        Details:
                        </div>
                    <Info>
                        <InfoIcon />
                    </Info>
                </ChannelDetails>

            </Header>

            <MessageContainer>
                {
                    messages.length > 0 &&
                    messages.map((data, index) => (
                        <ChatMessage
                            text={data.text}
                            name={data.user}
                            image={data.userImage}
                            timestamp={data.timestamp}
                        />
                    ))
                }
            </MessageContainer>

            <ChatInput sendMessage={sendMessage} />

        </Container>
    )
}


export default Chat

const Container = styled.div`
background-color: #7ed6df;
background-image: linear-gradient(315deg, #7ed6df 0%, #000000 74%);
color:white;
display:grid;
min-height: 0;
grid-template-rows: 65px auto min-content;
`
const Channel = styled.div`

`
const ChannelDetails = styled.div`
display:flex;
align-items:center;
`
const ChannelName = styled.div`
font-weight:700;
font-size:21px;
color:#D2A813
;
`

const ChannelInfo = styled.div`
font-weight:400;
color:#dcdcdc;
font-size:16px;
margin-top:8px;
`
const Info = styled(InfoIcon)`
margin-left:10px;

`

const Header = styled.div`
padding-left:20px;
padding-right:20px;
display:flex;
align-items:center;
border-bottom: 1px solid #132743; 
justify-content: space-between;
`
const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
`
