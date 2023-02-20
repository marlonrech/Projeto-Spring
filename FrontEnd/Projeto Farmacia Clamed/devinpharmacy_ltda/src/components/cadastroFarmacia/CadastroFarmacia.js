import React from 'react'
import Header from '../header/Header'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import './CadastroFarmacia.css'
import { useState, useEffect } from "react";



const CadastroFarmacia = () => {

  const [form, setForm] = useState({

    razaosocial: "",
    cnpj: "",
    nomefantasia: "",
    email: "",
    telefone: "",
    celular: "",
    cep: "",
    logradouro: "",
    numero: "",
    bairro: "",
    localidade: "",
    uf: "",
    complemento: "",
    latitude: "",
    longitude: "",
  });

  useEffect(() => {
    if (form.cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${form.cep}/json/`)
        .then((response) => {
          return response.json();
        })
        .then((data) => { //retorno API
          const cep = data.cep
          const logradouro = data.logradouro
          const bairro = data.bairro
          const localidade = data.localidade
          const uf = data.uf
          const complemento = data.complemento
          setForm((prev) => ({ ...prev, cep, logradouro, complemento, bairro, localidade, uf }));
          console.log(data);
        });
    }
  }, [form.cep]);

  useEffect(() => {
    fetch(`https://nominatim.openstreetmap.org/search?street=${form.logradouro}&format=json`)
      .then((response) => {
        return response.json();
      })
      .then((local) => { //retorno API
        const longitude = local[1].lon;
        const latitude = local[1].lat;
        setForm((prev) => ({ ...prev, longitude, latitude }));
        console.log(local);
      });

  }, [form.logradouro]);


  const limparForm = () => {
    setForm({
      razaosocial: "",
      cnpj: "",
      nomefantasia: "",
      email: "",
      telefone: "",
      celular: "",
      cep: "",
      logradouro: "",
      numero: "",
      bairro: "",
      localidade: "",
      uf: "",
      complemento: "",
      latitude: "",
      longitude: "",
    });
  };



  const enviarSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:3001/farmacias", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),

    })
    alert('Farmácia cadastrada com sucesso!')

    setForm({
      razaosocial: "",
      cnpj: "",
      nomefantasia: "",
      email: "",
      telefone: "",
      celular: "",
      cep: "",
      logradouro: "",
      numero: "",
      bairro: "",
      localidade: "",
      uf: "",
      complemento: "",
      latitude: "",
      longitude: "",
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
                <Form.Group as={Col}>
                  <Form.Label htmlFor="razaosocial" className='label fs-5'>Razão Social</Form.Label>
                  <Form.Control className='input' type="text" id='razaosocial' value={form.razaosocial}
                    onChange={(e) => setForm({ ...form, razaosocial: e.target.value })} required />

                  {/* onChange={(e) => setForm({ ...form, cep: e.target.value })} required/> */}
                </Form.Group>

                <Form.Group as={Col} >
                  <Form.Label className='label fs-5'>CNPJ</Form.Label>
                  <Form.Control type="text" id='cnpj' value={form.cnpj}
                    onChange={(e) => setForm((prev) => ({ ...prev, cnpj: e.target.value }))} required />
                  {/* onChange={(e) => setForm((prev) => ({...prev, medicamento: e.target.value}))} required /> */}
                </Form.Group>

                <Form.Group as={Col} >
                  <Form.Label className='label fs-5'>Nome Fantasia</Form.Label>
                  <Form.Control type="text" id='nomefantasia' value={form.nomefantasia}
                    onChange={(e) => setForm({ ...form, nomefantasia: e.target.value })} required />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} >
                  <Form.Label className='label fs-5'>Email</Form.Label>
                  <Form.Control type="email" id='email' value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })} required />
                </Form.Group>

                <Form.Group as={Col} >
                  <Form.Label className='label fs-5'>Telefone</Form.Label>
                  <Form.Control type="tel" id='telefone' value={form.telefone}
                    onChange={(e) => setForm({ ...form, telefone: e.target.value })} placeholder="(xx) xxxxx-xxxx" pattern='\([0-9]{2}\)[0-9]{4}-[0-9]{4}' />
                </Form.Group>

                <Form.Group as={Col} >
                  <Form.Label className='label fs-5'>Celular</Form.Label>
                  <Form.Control type="tel" id='celular' value={form.celular}
                    onChange={(e) => setForm({ ...form, celular: e.target.value })} placeholder="(xx) xxxxx-xxxx" pattern='\([0-9]{2}\)[9]{1}[0-9]{4}-[0-9]{4}' required />
                </Form.Group>
              </Row>
            </Form >
            <Form onSubmit={enviarSubmit} className='form1'>
              <Row className="mb-3">
                <Form.Group xs={3} as={Col} >
                  <Form.Label className='label fs-5'>CEP</Form.Label>
                  <Form.Control type="text" id="CEP" maxLength={8} aria-describedby="cep" value={form.cep}
                    onChange={(e) => setForm({ ...form, cep: e.target.value })} required />
                </Form.Group>

                <Form.Group xs={7} as={Col} >
                  <Form.Label className='label fs-5'>Logradouro</Form.Label>
                  <Form.Control type="text" id='logradouro' value={form.logradouro}
                    onChange={(e) => setForm({ ...form, logradouro: e.target.value })} required />
                </Form.Group>

                <Form.Group as={Col} >
                  <Form.Label className='label fs-5'>Numero</Form.Label>
                  <Form.Control type="number" id='numero' value={form.numero}
                    onChange={(e) => setForm({ ...form, numero: e.target.value })} required />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col} >
                  <Form.Label className='label fs-5'>Bairro</Form.Label>
                  <Form.Control type="text" id='bairro' value={form.bairro}
                    onChange={(e) => setForm({ ...form, bairro: e.target.value })} required />
                </Form.Group>

                <Form.Group as={Col} >
                  <Form.Label className='label fs-5'>Cidade</Form.Label>
                  <Form.Control type="text" id='cidade' value={form.localidade}
                    onChange={(e) => setForm({ ...form, localidade: e.target.value })} required />
                </Form.Group>

                <Form.Group as={Col} >
                  <Form.Label className='label fs-5'>Estado</Form.Label>
                  <Form.Control type="text" id='estado' value={form.uf}
                    onChange={(e) => setForm({ ...form, uf: e.target.value })} required />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group xs={6} as={Col} >
                  <Form.Label className='label fs-5'>Complemento</Form.Label>
                  <Form.Control type="text" id='complemento' placeholder='Ex: apt. 42 ou Casa A' value={form.complemento}
                    onChange={(e) => setForm({ ...form, complemento: e.target.value })} />
                </Form.Group>

                <Form.Group as={Col} >
                  <Form.Label className='label fs-5'>Latitude</Form.Label>
                  <Form.Control type="text" id='latitude' value={form.latitude}
                    onChange={(e) => setForm({ ...form, latitude: e.target.value })}
                    required />
                </Form.Group>

                <Form.Group as={Col} >
                  <Form.Label className='label fs-5'>Longitude</Form.Label>
                  <Form.Control type="text" id='longitude' value={form.longitude}
                    onChange={(e) => setForm({ ...form, longitude: e.target.value })}
                    required />
                </Form.Group>
              </Row>

              <Button onClick={limparForm} className='btn' variant="primary">Limpar</Button>
              <Button className="btn" variant="primary" type="submit">Salvar</Button>
            </Form>
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default CadastroFarmacia