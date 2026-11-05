import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

import DetProduto from "./pages/detproduto/DetProduto";
import Home from "./pages/home/Home";
import Produtos from "./pages/lista/Produtos";
import Login from "./pages/login/Login";
import AdmProdutos from "./pages/home/admprodutos/AdmProdutos";

export function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="/produtos" element={<Produtos />} />
                <Route path="/detalheproduto" element={<DetProduto />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/AdmProdutos" element={<AdmProdutos />} />
                <Route path="*" element={<img className="container-not-found" src="file:///C:/Users/45786294811/Downloads/6pSbyFhGTy%20(1).gif" alt="imagem não encontrada" />}/>
       </Routes>
            <Footer />

        </>
    )
}