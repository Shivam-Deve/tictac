import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import Input from '../components/Input'
import colors from '../utils/colors'
import { useUserContext } from '../context/user_context'
import { useHistory } from 'react-router-dom'
function Login() {
    const { user, register } = useUserContext();
    const history = useHistory()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const handleClick = () => {
        const data = { username, password, email, name };
        register(data);
    }
    useEffect(() => {
        if (user) {
            history.push("/welcome")
        }
    }, [user])
    return (
        <Wrapper>
            <div className="title">
                <span>Create account</span>
                <span>Let's get to know you better!</span>
                <Input label='Username' type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Type your username here" />
                <Input label='Password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Type your password here" />
                <Input label='Your name' placeholder="Type your name here" value={name} onChange={(e) => setName(e.target.value)} />
                <Input label='Email' placeholder="Type your email here" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form">
                <Button color={colors.yellow} onClick={handleClick}>Register</Button>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    max-height: 100vh;
    width: 100vw;
    justify-content: start;

    
    .title{
        flex: 8;
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        span{
            &:nth-child(1){
            font-size: 20px;
            font-weight: bold;
        }
        &:nth-child(2){
            font-size: 50px;
        }
        }
    }
    .buttons{
        flex:4;
        width: 100%;
        flex-direction: column;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export default Login