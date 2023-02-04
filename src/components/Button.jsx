import React from 'react'
import styled from 'styled-components'
function Button({ color, children, ...props }) {
    return (
        <Wrapper color={color} {...props}>
            {children}
        </Wrapper>
    )
}

const Wrapper = styled.button`
    height: 56px;
    width: 80%;
    margin: 20px;
    border: none;
    font-weight: 600;
    color:white;
    text-transform: uppercase;
    box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.16);
    border-radius: 8px;
    background-color: ${props => props.color || "#2F80ED"};
    &:hover{
        cursor: pointer;
    }
`;

export default Button;