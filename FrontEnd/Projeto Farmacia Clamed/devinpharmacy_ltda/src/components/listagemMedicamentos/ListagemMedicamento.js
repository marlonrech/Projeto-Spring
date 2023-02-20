import React from 'react'
import Header from '../header/Header'
import { Card, Button } from 'react-bootstrap'
import { useState, useEffect } from "react";
import './ListagemMedicamentos.css'
import Modal from '../modal/Modal';
import { Container, Row, Col, Form} from 'react-bootstrap'


const ListagemMedicamento = () => {

  const [modal, setModal] = useState(false);
  const [tempdata, setTempData] = useState([]);

  const getData = (medicamento, laboratorio, dosagem, tipo, preco, descricao) => {
    let tempData = [medicamento, laboratorio, dosagem, tipo, preco, descricao];
    console.log(tempData);
    setTempData(() => [1, ...tempData]);

    return setModal(true);
  };


  const [medicamento, setMedicamento] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/medicamentos")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMedicamento(data);
      });

  }, []);


  const [filtrado, setFiltro] = useState(medicamento);

  useEffect(() => {
    fetch("http://localhost:3001/medicamentos")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFiltro(data);
      });

  }, []);

  const [termo, setTermo] = useState('')

  useEffect(() => {

    setFiltro(

      medicamento.filter(item => {
        if (
          (item.medicamento.toLocaleLowerCase()).indexOf(termo.toLocaleLowerCase()) !== -1) {
          return item;
        }
      })
    )
  }, [termo])

  return (
    <>
      <Header />
              <Form.Group lg={2} md={5} sm={5}className='input2' xs={10}as={Col} >
                  <Form.Control value={termo} onChange={(e) => setTermo(e.target.value)} placeholder='Digite o nome do medicamento'/>
                </Form.Group>
      <div className='div row '>
        {filtrado.map(medicamento => {
          return <Card className='card' style={{ width: '18rem' }} key={medicamento.id}>
            <Card.Img className='card-img' variant="top" src="https://precopopular.vteximg.com.br/arquivos/ids/190342-800-800/rotulo_pp_generico_receita.jpg?v=637847768755130000" />
            <Card.Body>
              <Card.Title>{medicamento.medicamento} </Card.Title>
              <Card.Text>
                {medicamento.medicamento} {medicamento.laboratorio} {medicamento.dosagem}
              </Card.Text>
              <Card.Text >R$ {medicamento.preco}</Card.Text>
              <Button onClick={() => getData(medicamento.medicamento, medicamento.laboratorio, medicamento.dosagem, medicamento.tipo, medicamento.preco, medicamento.descricao)} >Mais informações</Button>
            </Card.Body>
          </Card>
        })}
      </div>
      {
        modal === true ? <Modal medicamento={tempdata[1]} laboratorio={tempdata[2]} dosagem={tempdata[3]} tipo={tempdata[4]} preco={tempdata[5]} descricao={tempdata[6]} hide={() => setModal(false)} /> : ''
      }
    </>
  )
}


export default ListagemMedicamento