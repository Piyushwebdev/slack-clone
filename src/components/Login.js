import React from 'react'
import styled from 'styled-components'
import { auth, provider } from '../firebase'

function Login(props) {

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                const newUser = {
                    name: result.user.displayName,
                    photo: result.user.photoURL,
                }
                localStorage.setItem('user', JSON.stringify(newUser));
                props.setUser(newUser);
            })
            .catch((error) => {
                alert(error.message)
            })
    }
    return (
        <Container>
            <Content>
                <SlackImg src="https://cdn.worldvectorlogo.com/logos/slack-new-logo.svg" />
                <h1>Sign in Slack</h1>
                <SignInButton onClick={() => signIn()}>
                    Sign In With Google
        </SignInButton>
            </Content>
        </Container>
    )
}
export default Login;


const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

const Content = styled.div`
    background: #fff;
    color:#000;
    padding: 100px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  box-shadow: 3px 3px 7px purple, -4px -3px 3px #EC336B;
`

const SlackImg = styled.img`
    height: 100px;
`

const SignInButton = styled.button`
    margin-top: 50px;
    background-color: #000000;
    color: #fff;
    border: none;
    height: 40px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 15px;
    :hover
    {
        background-color:#EC336B;
        color:#000000;
        
    }
`