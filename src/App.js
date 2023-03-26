import logo from "./logo.svg";
import "./App.css";
import { Button, Form, FormGroup } from "react-bootstrap";
import Demo from "./demo";
import { CustomButton } from "./Components/Button";

function App() {
  return (
    <Form>
      <FormGroup />
      <Form.Group className="mb-3" controlId="formBasicEmail"></Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <CustomButton / >
      <Demo></Demo>
      <div className="mb-3">
        <h1>React Material</h1>
      </div>
    </Form>
  );
}

export default App;
