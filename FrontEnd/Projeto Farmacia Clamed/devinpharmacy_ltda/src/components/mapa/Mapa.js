import React from "react";
import Header from "../header/Header";
import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "./Mapa.css";

const Mapa = () => {
  const [farmacias, setFarmacias] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/farmacia")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data.dados);
        setFarmacias(data.dados);
      });
  }, []);

  return (
    <div>
      <Header />
      <div
        className="cont"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 className="mapa">Nossas farmácias cadastradas</h2>
        <MapContainer
          center={[-26.301506, -48.847365]}
          zoom={12}
          scrollWheelZoom={true}
          style={{ height: "80vh", width: "85%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {farmacias.map((farmacia) => (
            <Marker
              position={[
                farmacia.endereco.latitude,
                farmacia.endereco.longitude,
              ]}
            >
              <Popup>
                <h3>{farmacia.razao_social}</h3>
                <h5>Nome:{farmacia.nome_fantasia}</h5>
                <p>Email: {farmacia.email}</p>
                <p>
                  Endereço: {farmacia.endereco.logradouro},{" "}
                  {farmacia.endereco.numero} - {farmacia.endereco.bairro},{" "}
                  {farmacia.endereco.cidade} - {farmacia.endereco.uf},{" "}
                  {farmacia.endereco.cep}{" "}
                </p>
                {farmacia.telefone === "" ? (
                  <p>Celular: {farmacia.celular}</p>
                ) : (
                  <p>
                    Telefone: {farmacia.telefone} - Celular: {farmacia.celular}
                  </p>
                )}
                <p>CNPJ: {farmacia.cnpj}</p>
                <p>
                  {farmacia.endereco.latitude} , {farmacia.endereco.longitude}
                </p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Mapa;
