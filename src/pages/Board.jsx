import React from 'react'
import styled from 'styled-components'
import Button from '../components/Button'
import colors from '../utils/colors'
import Piece from '../components/Piece'
import { useBoardContext } from '../context/board_context'
function Welcome() {
    const { matrix, makeMove, status } = useBoardContext();
    return (
        <Wrapper status={status === "You win"}>
            <div className="title">
                Game with Tanmay
            </div>
            <div className="icon">
                <span>Your piece</span>
                <Piece icon="cross" size={40} />
            </div>
            <div className="board">
                <div className="move">
                    {status}
                </div>
                <div class="grid-container">
                    {matrix.map((row, rowIdx) => {
                        return row.map((col, colIdx) => (
                            <button className="grid-item" onClick={() => makeMove(1, rowIdx, colIdx)}>
                                {col && col !== "null" ? (col === -1 ? <Piece icon="zero" /> : <Piece icon="cross" />) : null}
                            </button>
                        ))
                    })}

                </div>
            </div>

            <div className="form">
                <Button color={colors.yellow}>Start another game</Button>
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
    .board{
        background-color: #FFE79E;
        .move{
            height: 60px;
            display: flex;
            background-color: ${props => props.status ? "palegreen" : "#FFE79E"};
            justify-content: center;
            align-items: center;
            text-align: center;
            font-size: 30px;
        }
        .grid-container {
            display: grid;
            grid-template-columns: auto auto auto;
            gap:5px;
            .grid-item{
                padding: 20px;
                border:none;
                height: 100px;
                text-align: center;
                background-color: white;
                &:hover{
                    cursor: pointer;
                }
            }
        }
    }
    
    .title{
        font-size: 30px;
        font-weight: 700;
    }
    .icon{
        display: flex;
        flex-direction: column;
        span{
            margin-bottom: 10px;
        }
    }

    
`

export default Welcome