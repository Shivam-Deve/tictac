import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import Input from '../components/Input'
import colors from '../utils/colors';
import { useHistory } from 'react-router-dom';
import { useUserContext } from '../context/user_context'
function Login() {
    const { user, login } = useUserContext();
    const history = useHistory()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = () => {
        const data = { username, password };
        login(data);
    }
    useEffect(() => {
        if (user) {
            history.push("/welcome")
        }
    }, [user])
    return (
        <Wrapper>
            <div className="title">
                <span>Login</span>
                <span>Please enter your details</span>
                <Input label='Username' type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Type your username here" />
                <Input label='Password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Type your password here" />
            </div>
            <div className="form">
                <Button color={colors.yellow} onClick={handleLogin}>Login</Button>
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