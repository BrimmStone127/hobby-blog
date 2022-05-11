import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Counter} from './features/counter/Counter'

function App() {
  return (
    <div className="App">
      <Container>
        <h1>Kitchen Buddy</h1>
        <Button>Test Button</Button>
        <Counter/>
      </Container>
    </div>
  );
}

export default App;
