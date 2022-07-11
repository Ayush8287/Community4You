// import Product from "./pages/Product";
import Home from "./pages/Home";
// import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
// import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/Register" element={<Register/>}/>
    <Route exact path="/Login" element={<Login/>}/>
      
  {/* <Login/> */}
  {/* <Register/> */}
  </Routes>
  </>

  );
};


export default App;