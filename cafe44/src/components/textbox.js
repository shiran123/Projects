import {StyledTextBox} from './styles/textbox.styled'

export default function textBox (props) {
    return (
        <StyledTextBox error_visibility={props.error_visibility}>
            <label>{props.label}</label>
            <input type="text" name={props.name}/>
            <p>{props.error}</p>
        </StyledTextBox>
    )
}