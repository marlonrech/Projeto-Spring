import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "../components/Login/Login";
import CadastroMedicamentos from "../components/cadastroMedicamentos/CadastroMedicamentos";
import Mapa from "../components/mapa/Mapa";
import ListagemMedicamento from "../components/listagemMedicamentos/ListagemMedicamento";
import CadastroFarmacia from "../components/cadastroFarmacia/CadastroFarmacia";
import NotFound from "../components/notFound/NotFound";

export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/notfound" />} />
        <Route path="/cadastromedicamento" element={<CadastroMedicamentos />} />
        <Route path="/mapa" element={<Mapa />} />
        <Route path="/listagemmedicamento" element={<ListagemMedicamento />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
        {/* <Route path="modal" element={<Navigate replace to= "/modal" />} /> */}
        <Route path="/cadastrofarmacia" element={<CadastroFarmacia />} />
        <Route path="/notfound" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
