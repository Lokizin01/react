import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import home from "./pages/home/Home";


export function App(){
    return(
        <>
        <Header/>
        <Routes>
           <Route path="" element={< home/>}/>
           <Route path="/produtos" element={<produtos/>}/>
       </Routes>
        <Footer/>

        </>
    )
}