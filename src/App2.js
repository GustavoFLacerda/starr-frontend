import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/GlobalStyle";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import ProductsPage from "./pages/ProductsPage";

export default function App2(){
    return(
        <>
        <GlobalStyle />
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/products" element={<ProductsPage />} />
        </Routes>
        </BrowserRouter>
        </>
    )
}