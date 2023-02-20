import React from 'react'


import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Logo from '../../img/logo.jpg'
import './Login.css'

const Login = () => {

    const [login, setLogin] = useState({ email: '', password: '' });
    const navigate = useNavigate();
    function Logar(e) {
        e.preventDefault();
        navigate('/cadastrofarmacia');
    }

    return (
        <>

            <Container className='container shadow-sm text-success mt-5 p-3 rounded'>
                <Row className='mt-5'>
                    <Col lg={5} md={6} sm={12} className='form p-5 m-auto shadow-sm rounded-lg'>
                        <img className='clamed-logo ' src={Logo} alt="logo" />
                        <Form onSubmit={Logar}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className='form-label typeEmail'>Email</Form.Label>
                                <Form.Control className='form-outline form-control '
                                    type="email" required
                                    placeholder="Digite seu email"
                                    value={login.email}
                                    onChange={(e) => { setLogin({ ...login, email: e.target.value }) }}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Senha</Form.Label>
                                <Form.Control
                                    type="password" required minLength='8'
                                    placeholder="Digite sua senha"
                                    value={login.senha}
                                    onChange={(e) => { setLogin({ ...login, password: e.target.value }) }}
                                />
                            </Form.Group>
                            <div className='d-grid gap-2'>
                                <Button variant="primary" type="submit">
                                    Login
                                </Button>
                                

                                {/* <Button variant="primary" type="submit">
                                Cadastrar
                            </Button> */}
                            </div>

                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Login