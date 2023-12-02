import { StyledButton } from "./styles/button.styled";

export default function button (props) {
    return (
        <StyledButton top_margin='25px'>
            <button onClick={props.onClick}>{props.children}</button>
        </StyledButton>
    )
}