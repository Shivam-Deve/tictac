import React from 'react'
import styled from 'styled-components'
function Input({ label, placeholder, ...props }) {
    return (
        <Wrapper>
            <div>{label}</div>
            <input {...props} placeholder={placeholder} />
        </Wrapper>
    )
}

const Wrapper = styled.button`
    display: flex;
    flex-direction: column;
    align-items: start;
    background-color: white;
    width: 90%;
    margin: 20px;
    border: none;
    font-weight: 600;
   
    div{
        font-size: medium;
        margin-bottom: 20px;
    }
    input{
        width: 100%;
        height: 56px;
        border:none;
        background-color:  #F4F4F4;
        border-radius: 8px;
        padding-left: 10px;
        &:focus{
            border: none;
            outline: none;
        }
;
    }

`;

export default Input;