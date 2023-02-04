import React, { useState } from 'react'
// import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/Button'
import Input from '../components/Input'
import colors from '../utils/colors'
import { useBoardContext } from '../context/board_context'
function Login() {
    // const history = useHistory();
    const [email, setEmail] = useState();
    const { startGame } = useBoardContext();
    const handleStart = () => {
        startGame(email)
        // history.push("./board")
    }
    return (
        <Wrapper>
            <div className="title">
                <span>Start a new game</span>
                <span>Whome do you want to play with?</span>
                <Input label='Email' placeholder="Type their email here" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form">
                <Button color={colors.yellow} onClick={handleStart}>Start game</Button>
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
    justify-content: space-between;
    
    .title{
        flex: 8;
        display: flex;
        flex-direction: column;
        justify-content: start;
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