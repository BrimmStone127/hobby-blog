import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Counter} from './features/counter/Counter'
import { PhotoGallery } from './PhotoGallery';

function App() {
  return (
    <div className="App">
      <>{/*
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          </Container>
        </Navbar>
        <br />
      <br />
  */}
      <Navbar bg="light" variant="light">
        <Container>
        <Navbar.Brand href="#home">Clay Brimm</Navbar.Brand>
        <Nav className="me-auto">
          {/*<Nav.Link href="#home">Home</Nav.Link>}*/}
          <Nav.Link href="#gallery">Gallery</Nav.Link>
          {/*<Nav.Link href="#about">About</Nav.Link>*/}
        </Nav>
        </Container>
      </Navbar>
    </>
      <Container>
        {/*
          <h1>Kitchen Buddy</h1>
          <Button>Test Button</Button>
          <Counter/>
        */}
        <PhotoGallery />
      </Container>
    </div>
  );
}

export default App;
