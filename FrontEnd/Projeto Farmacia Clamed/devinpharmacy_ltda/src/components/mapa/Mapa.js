import React from 'react'
import Header from '../header/Header'
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import './Mapa.css'

const Mapa = () => {

  const [farmacias, setFarmacias] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/farmacias")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFarmacias(data);
      });
  }, []);

  return (
    <div >
    <Header />
      <div className='cont' style={{display: 'flex', flexDirection: 'column', alignItems:'center'}}>
      <h2 className='mapa'>Nossas farmácias cadastradas</h2>
      <MapContainer 
        center={[-26.301506, -48.847365]}
        zoom={12}
        scrollWheelZoom={true}
        style={{ height: '80vh', width: '85%' }}>

        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {farmacias.map((farmacia) => (
          <Marker position={[farmacia.latitude, farmacia.longitude]}>
            <Popup>
              <h3>{farmacia.razaosocial}</h3>
              <h5>Nome:{farmacia.nomefantasia}</h5>
              <p>Email: {farmacia.email}</p>
              <p>Endereço: {farmacia.logradouro}, {farmacia.numero} - {farmacia.bairro}, {farmacia.localidade} - {farmacia.uf}, {farmacia.cep} </p>
              {farmacia.telefone === '' ? (
                <p>Celular: {farmacia.celular}</p>
              ) : (
                <p>Telefone: {farmacia.telefone} - Celular: {farmacia.celular}</p>
              )}
              <p>CNPJ: {farmacia.cnpj}</p>
              <p>{farmacia.latitude} , {farmacia.longitude}</p>
              
            </Popup>
          </Marker>

        ))}
      </MapContainer>

      </div>
    </div>
  )
}

export default Mapa