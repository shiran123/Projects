import styled from 'styled-components'

export const StyledTextBox = styled.div`
    display : flex;
    flex-direction: column;
    width: 100%;

    label,input,p {
        margin: 5px;
    }

    & > p {
        color: red;
        font-size: 13px;
        display: ${({error_visibility}) => error_visibility || 'block'};
    }

    & > input {
        height: 30px;
        border: 1px solid #dee2e6;
        outline: none;
        border-radius: 7px;
        padding: 7px;
        font-size: 14px;
    }

    & > input:focus {
        border: 3px solid lightskyblue;
        transition: 0.5ms;
    }

`