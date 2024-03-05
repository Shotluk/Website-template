import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


function LoginForm({ setLog , validCredentials, setValidCredentials}) {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

     

  const handleSubmit = (e) => {
    e.preventDefault();

    // Replace this with your actual authentication logic
    const isValidcredential = validCredentials.find(
        (entry) => entry.email === email && entry.password === password
      );

      //servicesData.find((s) =>   s.name === service);
  
      if (isValidcredential) {

        setValidCredentials((prevCredentials) =>
        prevCredentials.map((entry) =>
        entry.email === email && entry.password === password ? { ...entry, selected: true } : entry
      )
    );
        setLog(true); // Set isLoggedIn to true after successful login
        
        navigate('/'); // Redirect to the home page // Callback function passed as a prop
    } else {
        toast.error("This didn't work.")

    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

function Login({ isLoggedIn, setLoggedIn,validCredentials,setValidCredentials}) {
    return (
        
      <Container className="d-flex flex-column min-vh-100 mt-5 mb-5 ms-5">
        <Row>
            <div><Toaster/></div>
          <Col md={{ span: 6, offset: 3 }}>
            <h2 className="mb-4">Login</h2>
            {isLoggedIn ? (
              <p>You are already logged in.</p>
            ) : (
              <LoginForm setLog={setLoggedIn}  validCredentials={validCredentials} setValidCredentials={setValidCredentials}/>
            )}
          </Col>
        </Row>
      </Container>
    );
  }

export default Login;
