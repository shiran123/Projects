import styled from "styled-components";

export const StyledButton = styled.div`
    margin: 5px;
    margin-top: ${({top_margin}) => top_margin || '5px'};

    button {
        background-color: #0d6efd;
        color: #fff;
        width: 100%;
        padding: 7px;
        border-radius: 7px;
        border: #0d6efd;
        height: 30px;
        font-size: 15px;
    }

    button:active {
        background-color: blue;
        transition: 0.2s;
    }

`