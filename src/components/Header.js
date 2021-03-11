import React from 'react'
import styled from 'styled-components'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';

function Header({ user, signOut }) {
    return (
        <Container>
            <Main>
                <FavoriteBorderOutlinedIcon />
                <SearchContainer>
                    <Search>
                        <input type="text" placeholder="Search..." />
                    </Search>
                </SearchContainer>
                <SearchSharpIcon />

            </Main>
            <UserContainer>
                <Name>
                    {user.name}
                </Name>
                <UserImage onClick={signOut}>
                    <img src={user.photo ? user.photo : "https://i.imgur.com/6VBx3io.png"} />
                </UserImage>
            </UserContainer>
        </Container>
    )
}

export default Header


const Container = styled.div`
    background: #000000;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-bottom: 1px solid #132743;
  
`

const Main = styled.div`
    display: flex;
    margin-right: 16px;
    margin-left 16px;
`

const SearchContainer = styled.div`
    min-width: 400px;
    margin-left: 16px;
    margin-right: 16px;
`

const Search = styled.div`
    box-shadow: inset 0 0 0 1px #fff;
    width: 100%;
    border-radius: 6px;
    display: flex;
    align-items: center;
    input {
        background-color: transparent;
        border: none;
        padding-left: 8px;
        padding-right: 8px;
        color: #fff;
        padding-top: 4px;
        padding-bottom: 4px;
    }
    input:focus {
        outline: none;
    }
    input::placeholder{
        color: #fff;
    }
`

const UserContainer = styled.div`
    display: flex;
    align-items: center;
    padding-right: 16px;
    position: absolute;
    right: 0;
`

const Name = styled.div`
    padding-right: 16px;
`

const UserImage = styled.div`
    width: 24px;
    height: 24px;
    border: 2px solid #fff;
    border-radius: 3px;
    cursor:pointer;
    img {
        width: 100%;
    }
`