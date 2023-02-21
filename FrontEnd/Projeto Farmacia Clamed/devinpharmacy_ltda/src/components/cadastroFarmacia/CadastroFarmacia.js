import React from "react";
import Header from "../header/Header";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./CadastroFarmacia.css";
import { useState, useEffect } from "react";

const CadastroFarmacia = () => {
  const [form, setForm] = useState({
    razao_social: "",
    cnpj: "",
    nome_fantasia: "",
    email: "",
    telefone: "",
    celular: "",
    endereco: {
      cep: "",
      logradouro: "",
      numero: "",
      bairro: "",
      cidade: "",
      estado: "",
      complemento: "",
      latitude: "",
      longitude: "",
    },
  });

  useEffect(() => {
    if (form.endereco.cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${form.endereco.cep}/json/`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          //retorno API
          setForm({
            ...form,
            endereco: {
              cep: data.cep,
              logradouro: data.logradouro,
              bairro: data.bairro,
              cidade: data.localidade,
              estado: data.uf,
            },
          });
        });
    }
  }, [form.endereco.cep]);

  useEffect(() => {
    fetch(
      `https://nominatim.openstreetmap.org/search?street=${form.endereco.logradouro}&format=json`
    )
      .then((response) => {
        return response.json();
      })
      .then((local) => {
        //retorno API
        setForm({
          ...form,
          endereco: {
            ...form.endereco,
            latitude: local[0].lat,
            longitude: local[0].lon,
          },
        });
      });
  }, [form.endereco.logradouro]);

  const limparForm = () => {
    setForm({
      razao_social: "",
      cnpj: "",
      nome_fantasia: "",
      email: "",
      telefone: "",
      celular: "",
      endereco: {
        cep: "",
        logradouro: "",
        numero: "",
        bairro: "",
        cidade: "",
        estado: "",
        complemento: "",
        latitude: "",
        longitude: "",
      },
    });
  };

  const enviarSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:8080/farmacia", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    alert("Farmácia cadastrada com sucesso!");

    setForm({
      razao_social: "",
      cnpj: "",
      nome_fantasia: "",
      email: "",
      telefone: "",
      celular: "",
      endereco: {
        cep: "",
        logradouro: "",
        numero: "",
        bairro: "",
        cidade: "",
        estado: "",
        complemento: "",
        latitude: "",
        longitude: "",
      },
    });
  };

  return (
    <>
      <Header />
      <Container>
        <Row className="mt-5">
          <Col lg={12} md={12} sm={12}>
            <Form onSubmit={enviarSubmit} className="form">
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label htmlFor="razao_social" className="label fs-5">
                    Razão Social
                  </Form.Label>
                  <Form.Control
                    className="input"
                    type="text"
                    id="razao_social"
                    value={form.razao_social}
                    onChange={(e) =>
                      setForm({ ...form, razao_social: e.target.value })
                    }
                    required
                  />

                  {/* onChange={(e) => setForm({ ...form, cep: e.target.value })} required/> */}
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label className="label fs-5">CNPJ</Form.Label>
                  <Form.Control
                    type="text"
                    id="cnpj"
                    value={form.cnpj}
                    onChange={(e) =>
                      setForm((prev) => ({ ...prev, cnpj: e.target.value }))
                    }
                    required
                  />
                  {/* onChange={(e) => setForm((prev) => ({...prev, medicamento: e.target.value}))} required /> */}
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label className="label fs-5">Nome Fantasia</Form.Label>
                  <Form.Control
                    type="text"
                    id="nome_fantasia"
                    value={form.nome_fantasia}
                    onChange={(e) =>
                      setForm({ ...form, nome_fantasia: e.target.value })
                    }
                    required
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label className="label fs-5">Email</Form.Label>
                  <Form.Control
                    type="email"
                    id="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    required
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label className="label fs-5">Telefone</Form.Label>
                  <Form.Control
                    type="tel"
                    id="telefone"
                    value={form.telefone}
                    onChange={(e) =>
                      setForm({ ...form, telefone: e.target.value })
                    }
                    placeholder="(xx) xxxxx-xxxx"
                    pattern="\([0-9]{2}\)[0-9]{4}-[0-9]{4}"
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label className="label fs-5">Celular</Form.Label>
                  <Form.Control
                    type="tel"
                    id="celular"
                    value={form.celular}
                    onChange={(e) =>
                      setForm({ ...form, celular: e.target.value })
                    }
                    placeholder="(xx) xxxxx-xxxx"
                    pattern="\([0-9]{2}\)[9]{1}[0-9]{4}-[0-9]{4}"
                    required
                  />
                </Form.Group>
              </Row>
            </Form>
            <Form onSubmit={enviarSubmit} className="form1">
              <Row className="mb-3">
                <Form.Group xs={3} as={Col}>
                  <Form.Label className="label fs-5">CEP</Form.Label>
                  <Form.Control
                    type="text"
                    id="CEP"
                    maxLength={8}
                    aria-describedby="cep"
                    value={form.endereco.cep}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        endereco: { ...form.endereco, cep: e.target.value },
                      })
                    }
                    required
                  />
                </Form.Group>

                <Form.Group xs={7} as={Col}>
                  <Form.Label className="label fs-5">Logradouro</Form.Label>
                  <Form.Control
                    type="text"
                    id="logradouro"
                    value={form.endereco.logradouro}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        endereco: {
                          ...form.endereco,
                          logradouro: e.target.value,
                        },
                      })
                    }
                    required
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label className="label fs-5">Numero</Form.Label>
                  <Form.Control
                    type="number"
                    id="numero"
                    value={form.endereco.numero}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        endereco: {
                          ...form.endereco,
                          numero: e.target.value,
                        },
                      })
                    }
                    required
                  />
                </Form.Group>
              </Row>

              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label className="label fs-5">Bairro</Form.Label>
                  <Form.Control
                    type="text"
                    id="bairro"
                    value={form.endereco.bairro}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        endereco: {
                          ...form.endereco,
                          bairro: e.target.value,
                        },
                      })
                    }
                    required
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label className="label fs-5">Cidade</Form.Label>
                  <Form.Control
                    type="text"
                    id="cidade"
                    value={form.endereco.cidade}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        endereco: {
                          ...form.endereco,
                          cidade: e.target.value,
                        },
                      })
                    }
                    required
                  />
                  {console.log(form)}
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label className="label fs-5">Estado</Form.Label>
                  <Form.Control
                    type="text"
                    id="estado"
                    value={form.endereco.estado}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        endereco: {
                          ...form.endereco,
                          estado: e.target.value,
                        },
                      })
                    }
                    required
                  />
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group xs={6} as={Col}>
                  <Form.Label className="label fs-5">Complemento</Form.Label>
                  <Form.Control
                    type="text"
                    id="complemento"
                    placeholder="Ex: apt. 42 ou Casa A"
                    value={form.endereco.complemento}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        endereco: {
                          ...form.endereco,
                          complemento: e.target.value,
                        },
                      })
                    }
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label className="label fs-5">Latitude</Form.Label>
                  <Form.Control
                    type="text"
                    id="latitude"
                    value={form.endereco.latitude}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        endereco: {
                          ...form.endereco,
                          latitude: e.target.value,
                        },
                      })
                    }
                    required
                  />
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label className="label fs-5">Longitude</Form.Label>
                  <Form.Control
                    type="text"
                    id="longitude"
                    value={form.endereco.longitude}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        endereco: {
                          ...form.endereco,
                          longitude: e.target.value,
                        },
                      })
                    }
                    required
                  />
                </Form.Group>
              </Row>

              <Button onClick={limparForm} className="btn" variant="primary">
                Limpar
              </Button>
              <Button className="btn" variant="primary" type="submit">
                Salvar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CadastroFarmacia;
