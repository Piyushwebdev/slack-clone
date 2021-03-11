import React from 'react';
import styled from 'styled-components';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { sidebarItemsData } from '../data/SidebarData'
import AddIcon from '@material-ui/icons/Add';
import db from '../firebase';
import { useHistory } from 'react-router-dom';

function Sidebar(props) {

    const history = useHistory();

    const goToChannel = (id) => {

        if (id) {
            console.log(id);
            history.push(`/room/${id}`)
        }

    }

    const addChannel = () => {
        const promptName = prompt("Enter the channel name");
        if (promptName) {
            db.collection('rooms').add({
                name: promptName
            })
        }
    }
    return (
        <Container>
            <WorkspaceContainer>
                <Name>
                    PermanentRoomates
              </Name>
                <NewMessage>
                    <GroupAddIcon />
                </NewMessage>
            </WorkspaceContainer>
            <MainChannels>
                {
                    sidebarItemsData.map(item => (
                        <MainChannelItem>
                            {item.icon}
                            {item.text}
                        </MainChannelItem>
                    ))
                }

            </MainChannels>
            <ChannelsContainer>
                <NewChannelContainer>
                    <div>
                        Groups😀
                    </div>
                    <AddIcon onClick={addChannel} />
                </NewChannelContainer>

                <ChannelsList>
                    {
                        props.rooms.map(item => (
                            <Channel onClick={() => goToChannel(item.id)}>
                                ❌ {item.name}
                            </Channel>
                        ))
                    }
                </ChannelsList>

            </ChannelsContainer>

        </Container>

    )
}

export default Sidebar;

const Container = styled.div`
background-color: #7ed6df;
background-image: linear-gradient(315deg, #7ed6df 0%, #000000 74%);
`

const WorkspaceContainer = styled.div`

color: #fff;
height:64px;
display:flex;
align-items: center;
padding-left:19px;
justify-content :space-between;
border-bottom: 1px solid #132743;

`
const Name = styled.div`

`
const NewMessage = styled.div`
width:35px;
height:35px;

display:flex;
justify-content:center;
align-items:center;
border-radius:50%;
margin-right: 20px;
cursor:pointer;
`
const MainChannels = styled.div`
    padding-top: 20px;
`

const MainChannelItem = styled.div`
    color: #fff;
    display: grid;
    grid-template-columns: 15% auto;
    height: 28px;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    :hover {
        background: #D2A813
        ;
    }
`

const ChannelsContainer = styled.div`
    color:#fff;
    margin-top: 10px;
`

const NewChannelContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 28px;
    padding-left: 19px;
    padding-right: 12px;
`

const ChannelsList = styled.div`
    
    `

const Channel = styled.div`
    height: 28px;
    display: flex;
    align-items: center;
    padding-left: 19px;
    cursor: pointer;
    :hover {
        background: #D2A813
        ;
    }

`