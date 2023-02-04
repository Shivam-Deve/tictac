import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import colors from '../utils/colors'
import { useHistory } from 'react-router-dom'
function Landing() {
    const history = useHistory();
    return (
        <Wrapper>
            <div className="title">
                <span>async</span>
                <span>tic tac toe</span>
            </div>
            <div className="buttons">
                <Button color={colors.blue} onClick={() => history.push("/login")}>Login</Button>
                <Button color={colors.yellow} onClick={() => history.push("/register")}>Register</Button>
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
    
    .title{
        flex: 8;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        span{
            &:nth-child(1){
            font-size: 50px;
        }
        &:nth-child(2){
            font-size: 100px;
            text-align: center;
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

export default Landing