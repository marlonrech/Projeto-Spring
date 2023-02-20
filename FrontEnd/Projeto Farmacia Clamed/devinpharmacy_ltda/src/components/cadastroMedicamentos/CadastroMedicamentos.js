import React from 'react'
import Header from '../header/Header'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import './CadastroMedicamentos.css'
import { useState} from "react";


const CadastroMedicamentos = () => {

  const [form, setForm] = useState({

  });

  const enviarSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3001/medicamentos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
    alert('Medicamento cadastrado com sucesso!')
    setForm({
      medicamento: "",
      laboratorio: "",
      dosagem: "",
      tipo: "",
      preco: "",
      descricao: "",
    });

  };

  const limparForm = () => {
    setForm({
      medicamento: "",
      laboratorio: "",
      dosagem: "",
      tipo: "",
      preco: "",
      descricao: "",
    });
  };




  return (
    <>


      <Header />
      <Container>
        <Row className='mt-5'>
          <Col lg={12} md={12} sm={12}>
            <Form onSubmit={enviarSubmit} className='form'>
              <Row className="mb-3">
                <Form.Group as={Col} >
                  <Form.Label className='label fs-5'>Medicamento</Form.Label>
                  <Form.Control className='input' type="text" id='medicamento' value={form.medicamento} 
                  onChange={(e) => setForm((prev) => ({...prev, medicamento: e.target.value}))} required />
                </Form.Group>

                <Form.Group as={Col} >
                  <Form.Label className='label fs-5'>Laboratório</Form.Label>
                  <Form.Control type="text" id='laboratorio' value={form.laboratorio} 
                  onChange={(e) => setForm((prev) => ({...prev, laboratorio: e.target.value}))} required />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} >
                  <Form.Label className='label fs-5'>Dosagem</Form.Label>
                  <Form.Control type="text" id='dosagem' value={form.dosagem} 
                  onChange={(e) => setForm((prev) => ({...prev, dosagem: e.target.value}))} required/>
                </Form.Group>

                <Form.Group as={Col} >
                  <Form.Label className='label fs-5'>Tipo</Form.Label>
                  <Form.Select defaultValue=""  id='tipo' value={form.tipo} 
                  onChange={(e) => setForm((prev) => ({...prev, tipo: e.target.value}))} required>
                    <option selected disabled value="">Selecione</option>
                    <option>Medicamento controlado</option>
                    <option>Medicamento comum</option>
                  </Form.Select>
                  
                </Form.Group>

                <Form.Group as={Col} >
                  <Form.Label className='label fs-5'>Preço Unitario</Form.Label>
                  <Form.Control type="number" id='preco' value={form.preco} 
                  onChange={(e) => setForm((prev) => ({...prev, preco: e.target.value}))} required/>
                </Form.Group>
              </Row>
              
              <Form.Group className="mb-3">
                <Form.Label className='label fs-5'>Descrição do produto:</Form.Label>
                <Form.Control as="textarea" id='descricao' value={form.descricao} 
                onChange={(e) => setForm((prev) => ({...prev, descricao: e.target.value}))} rows={6} />
              </Form.Group>

              <Button onClick={limparForm} className='btn' variant="primary" >Limpar</Button>
              <Button className="btn" variant="primary" type="submit">Salvar</Button>


            </Form>

          </Col>

        </Row>
      </Container>
    </>



  )
}

export default CadastroMedicamentos