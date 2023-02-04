import React from 'react'
import styled from 'styled-components'
import colors from '../utils/colors'
import Button from './Button'
import { useBoardContext } from '../context/board_context'
import { useHistory } from 'react-router-dom'
function Card({ name, id }) {
    const { play } = useBoardContext();
    const history = useHistory();
    const handleClick = () => {
        play(id)
        history.push("/board")
    }
    return (
        <Wrapper>
            <h1>Game with {name}</h1>
            <p>{name} just made their move!</p>
            <p>It's your turn to play now.</p>
            <p>9th June 2022, 3:15pm</p>
            <Button color={colors.yellow} onClick={handleClick}>Play!</Button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 300px;
    width: 80%;
    margin: 20px;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px 20px;
    box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.16);
    border-radius: 8px;
    h1{
        font-size: 30px;
    }
    P{
        font-size: 15px;
    }
`

export default Card