import Navbars from "../Searchpage/Navbars";
import Content from "./Content";
import Section1 from "../Mainpage/Section1";
import Section2 from "../Mainpage/Section2";
import Footer from "../Mainpage/Footer";
import './Product.css'
function Product() {
  return (
    <>
      <div style={{ backgroundColor: "white" }}>
        <Navbars />
        <Content />
      </div>
      <Section1 />
      <Section2 />
      <Footer />
    </>
  );
}

export default Product;
