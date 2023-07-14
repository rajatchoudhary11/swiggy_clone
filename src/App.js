import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Main from "./Components/Mainpage/Main";
import Searchpage from "./Components/Searchpage/Searchpage";
import Product from "./Components/Productpage/Product"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/searchpage/" element={<Searchpage />}>
            <Route path="relevance"  />
            <Route path="delivery"  />
            <Route path="rating"  />
            <Route path="costl"  />
            <Route path="costh"  />
            <Route path="filter"  />
          </Route>
          <Route path="/product" element={<Product/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
