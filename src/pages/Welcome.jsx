import React, { useEffect } from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import colors from '../utils/colors'
import { useHistory } from 'react-router-dom'
import { useUserContext } from '../context/user_context'
import Card from '../components/Card'
function Welcome() {
    const history = useHistory();
    const { getGames, games } = useUserContext();
    useEffect(() => {
        getGames()
    }, [])
    return (
        <Wrapper>
            <div className="title">
                Your Games
            </div>
            <div className="list">
                {
                    games?.map(game => {
                        return <Card key={game._id} id={game.room} name={game.users[0]} />
                    })
                }
            </div>
            <div className="form">
                <Button color={colors.yellow} onClick={() => history.push("/start")}>Start a new game</Button>
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
        font-size: 30px;
        font-weight: 700;
    }
    .list{
        font-size: 70px;
        font-weight: 400;
        text-align: center;
    }

    
`

export default Welcome