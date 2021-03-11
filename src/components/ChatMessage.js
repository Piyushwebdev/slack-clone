import React from 'react'
import styled from 'styled-components';

function ChatMessage({ text, name, image, timestamp }) {
    return (
        <Container>
            <UseAvatar>
                <img src={image} />
            </UseAvatar>
            <MessageContent>
                <Name>
                    {name}
                    <span>{new Date(timestamp.toDate()).toUTCString()}</span>
                </Name>
                <Text>
                    {text}
                </Text>
            </MessageContent>

        </Container>
    )
}

export default ChatMessage

const Container = styled.div`
padding:8px 20px;
display:flex;
align-items:center;

:hover{
    background: #004242;
}
`
const UseAvatar = styled.div`
width:30px;
height:30px;
border-radius:2px;
overflow:hidden;
margin-right:8px;

img{
    width: 100%;
}
`
const MessageContent = styled.div`
display:flex;
flex-direction:column;
`
const Name = styled.div`
font-weight:900;
font-size:15px;
line-height:1.4;
color: #c2c2c2;

span{
    margin-left:8px;
    font-weight:400;
    color:#f5f5f5;
    font-size:13px;
}
`
const Text = styled.div`

`