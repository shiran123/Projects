import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    width : 500px;
    margin: 0 auto;

    @media(max-width: 640px){
        width : 400px;
    }
    
`