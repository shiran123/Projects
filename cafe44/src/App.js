import './App.css';
import { Container } from './components/styles/container.styled';
import TextBox from './components/textbox';
import Button from './components/button';

function App() {
  return (
    <div className="App">
      <Container>
        <TextBox label="Name" name="name" error="Please, enter your name!" error_visibility=''/>
        <TextBox label="Name" name="name" error="Please, enter your name!" error_visibility={null}/>
        <TextBox label="Name" name="name" error="Please, enter your name!" />
        <Button>Create Account</Button>
      </Container>
    </div>
  );
}

export default App;
