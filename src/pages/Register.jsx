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
            </div>
            <div className="form">
                <Input label='Username' type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Type your username here" />
                <Input label='Password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Type your password here" />
                <Input label='Your name' placeholder="Type your name here" value={name} onChange={(e) => setName(e.target.value)} />
                <Input label='Email' placeholder="Type your email here" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="button">
                <Button color={colors.yellow} onClick={handleClick}>Register</Button>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    min-height: 100%;
    width: 100vw;
    justify-content: start;
    
    .title{
        flex: 2;
        display: flex;
        flex-direction: column;
        justify-content: space-between;  
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
    .form{
        flex:6;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    .button{
        flex:2;
        width: 100%;
        flex-direction: column;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export default Login