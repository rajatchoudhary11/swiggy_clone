import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Meals from "../Searchpage/Meals";

function Content() {
  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get("id");
  const data = Meals.filter((item) => {
    return item.id === parseInt(id);
  });
  const product = data[0];
  return (
    <>
      <div>
        <div
          className="d-flex justify-content-between mt-4"
          style={{ marginLeft: "300px", marginRight: "300px" }}
        >
          <div>
            <Link
              to="/"
              className="text-decoration-none text-secondary"
              style={{ fontSize: "12px" }}
            >
              Home /{" "}
            </Link>
            <Link
              to="/searchpage"
              className="text-decoration-none text-secondary"
              style={{ fontSize: "12px" }}
            >
              Meerut /{" "}
            </Link>
            <Link
              to="/product"
              className="text-decoration-none text-dark"
              style={{ fontSize: "12px" }}
            >
              {product.name}
            </Link>
          </div>
          <div>
            <Link to="/#" className="text-dark">
              <FontAwesomeIcon icon={faSearch} style={{ fontSize: "16px" }} />
            </Link>
          </div>
        </div>
        <div
          className="d-flex justify-content-between mt-4"
          style={{
            marginLeft: "300px",
            marginRight: "300px",
            borderBottom: "1px dashed grey",
          }}
        >
          <div className="ps-2">
            <h4>{product.name}</h4>
            <p className="text-secondary mb-0" style={{ fontSize: "12px" }}>
              {product.desc}
            </p>
            <p className="text-secondary" style={{ fontSize: "12px" }}>
              {product.address}
            </p>
          </div>
          <div
            className="mb-5 px-2"
            style={{ border: "1px solid lightgrey", borderRadius: "5px" }}
          >
            <p
              className="my-1"
              style={{
                color: product.rating < 4 ? "#db7c38" : "#48c479",
              }}
            >
              {" "}
              <FontAwesomeIcon
                icon={faStar}
                className="mx-1 "
                style={{ fontSize: "12px" }}
              />
              {product.rating}
            </p>
            <hr className="my-1" />
            <p className="my-2" style={{ fontSize: "12px" }}>
              1k rating
            </p>
          </div>
        </div>
        <div
          className="d-flex justify-content-start ps-2 mt-3"
          style={{ marginLeft: "300px" }}
        >
          <div className="me-3">
            <p className="fw-bold text-dark">
              {" "}
              <FontAwesomeIcon icon={faClock} className="me-2" /> {product.time}
            </p>
          </div>
          <div className="mx-2">
            <p className="fw-bold text-dark">
              <FontAwesomeIcon icon={faIndianRupeeSign} className="me-2" />
              {product.price}
            </p>
          </div>
        </div>
        <div
          className="d-flex justify-content-between mb-5"
          style={{ marginLeft: "300px", marginRight: "300px" }}
        >
          <div
            className="d-flex"
            style={{
              border: "1px solid gray",
              borderRadius: "5px",
              width: "230px",
              cursor: "pointer",
            }}
          >
            <div className="mt-2">
              <p
                style={{
                  color: "rgb(228,109,71)",
                  fontWeight: "600",
                  fontSize: "0.7rem",
                  writingMode: "vertical-lr",
                  transform: "rotate(180deg)",
                  borderLeft: "1px solid grey",
                  paddingLeft: "4px",
                  textAlign: "center",
                }}
              >
                FLAT DEAL
              </p>
            </div>
            <div className="d-flex flex-column mt-3">
              <div className="d-flex">
                <div className="me-2">
                  <img
                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/Store_Assets/Icons/OfferIconCart"
                    alt="percentlogo"
                    style={{ width: "24px", height: "24px" }}
                  />
                </div>
                <div>
                  <h6
                    style={{
                      fontWeight: "700",
                      color: "#686b78",
                      fontSize: "0.95rem",
                    }}
                  >
                    FLAT ₹150 OFF
                  </h6>
                </div>
              </div>
              <div className="d-flex">
                <div className="me-1">
                  <h6
                    style={{
                      fontWeight: "600",
                      color: "#686b78",
                      fontSize: "0.66rem",
                    }}
                  >
                    FLAT ₹150 OFF
                  </h6>
                </div>
                <div>
                  <h6
                    className="ps-1"
                    style={{
                      fontWeight: "600",
                      color: "#686b78",
                      fontSize: "0.66rem",
                      borderLeft: "1px solid #686b78",
                    }}
                  >
                    ABOVE ₹399
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div
            className="d-flex"
            style={{
              border: "1px solid gray",
              borderRadius: "5px",
              width: "230px",
              cursor: "pointer",
            }}
          >
            <div className="d-flex flex-column mt-3 ms-2">
              <div className="d-flex">
                <div className="me-2">
                  <img
                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/rng/md/ads/production/1acdb97aadcb61b323307845bda86535"
                    alt="percentlogo"
                    style={{ width: "24px", height: "24px" }}
                  />
                </div>
                <div>
                  <h6
                    style={{
                      fontWeight: "700",
                      color: "#686b78",
                      fontSize: "0.95rem",
                    }}
                  >
                    20% OFF UPTO ₹120
                  </h6>
                </div>
              </div>
              <div className="d-flex">
                <div className="me-1">
                  <h6
                    style={{
                      fontWeight: "600",
                      color: "#686b78",
                      fontSize: "0.66rem",
                    }}
                  >
                    USE FEDERALCC
                  </h6>
                </div>
                <div>
                  <h6
                    className="ps-1"
                    style={{
                      fontWeight: "600",
                      color: "#686b78",
                      fontSize: "0.66rem",
                      borderLeft: "1px solid #686b78",
                    }}
                  >
                    ABOVE ₹249
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div
            className="d-flex"
            style={{
              border: "1px solid gray",
              borderRadius: "5px",
              width: "230px",
              cursor: "pointer",
            }}
          >
            <div className="d-flex flex-column mt-3 ms-2">
              <div className="d-flex">
                <div className="me-2">
                  <img
                    src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_28,h_28/rng/md/ads/production/4abdba6754dfedb04324150e316a4004"
                    alt="percentlogo"
                    style={{ width: "24px", height: "24px" }}
                  />
                </div>
                <div>
                  <h6
                    style={{
                      fontWeight: "700",
                      color: "#686b78",
                      fontSize: "0.95rem",
                    }}
                  >
                    20% OFF UPTO ₹125
                  </h6>
                </div>
              </div>
              <div className="d-flex">
                <div className="me-1">
                  <h6
                    style={{
                      fontWeight: "600",
                      color: "#686b78",
                      fontSize: "0.66rem",
                    }}
                  >
                    USE KOTAK125
                  </h6>
                </div>
                <div>
                  <h6
                    className="ps-1"
                    style={{
                      fontWeight: "600",
                      color: "#686b78",
                      fontSize: "0.66rem",
                      borderLeft: "1px solid #686b78",
                    }}
                  >
                    ABOVE ₹499
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginLeft: "300px", marginRight: "300px" }}>
          <h6 className="ps-2 " style={{ fontSize: "12px" }}>
            {" "}
            <FontAwesomeIcon
              icon={faLeaf}
              style={{ fontSize: "16px", color: "green" }}
            />{" "}
            PURE VEG
          </h6>
          <hr className="my-3" />
        </div>
        <div
          style={{
            marginLeft: "300px",
            marginRight: "300px",
            borderBottom: "15px solid #f1f1f6",
          }}
        >
          <p className="fw-bolder">{product.items[0].category}({product.items.length})</p>
          {product.items.map((item) => (
            <div
              className="d-flex justify-content-between fooddetail mt-3 pb-3"
              key={item.id}
            >
              <div className="lh-2 me-3">
                <h6>{item.name}</h6>
                <p className="fw-normal">
                  <FontAwesomeIcon
                    icon={faIndianRupeeSign}
                    className=" text-dark"
                    style={{ fontSize: "13px" }}
                  />
                  {item.price}
                </p>
                <p className="text-secondary" style={{ fontSize: "13px" }}>
                  {item.description}
                </p>
              </div>
              <div>
                <div className="image-box">
                  <img
                    src={item.img_url}
                    alt={item.name}
                    style={{
                      width: "118px",
                      height: "96px",
                      cursor: "pointer",
                    }}
                    className="bordered rounded "
                  />
                  <button className="addbut">ADD</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginLeft: "300px", marginRight: "300px" }}>
          <p className="fw-bolder mt-4">
          {product.combo[0].category}({product.combo.length})
          </p>
          {product.combo.map((item) => (
            <div
              className="d-flex justify-content-between fooddetail mt-3 pb-3"
              key={item.id}
            >
              <div className="lh-2 me-3">
                <h6>{item.name}</h6>
                <p className="fw-normal">
                  <FontAwesomeIcon
                    icon={faIndianRupeeSign}
                    className=" text-dark"
                    style={{ fontSize: "13px" }}
                  />
                  {item.price}
                </p>
                <p className="text-secondary" style={{ fontSize: "13px" }}>
                  {item.description}
                </p>
              </div>
              <div>
                <div className="image-box">
                  <img
                    src={item.img_url}
                    alt={item.name}
                    style={{
                      width: "118px",
                      height: "96px",
                      cursor: "pointer",
                    }}
                    className="bordered rounded "
                  />
                  <button className="addbut">ADD</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            marginLeft: "300px",
            marginRight: "300px",
            backgroundColor: "#f1f1f6",
          }}
        >
          <div className="d-flex ">
            <div className="mx-3 mt-3">
              <img
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_120,h_60/fssai_final_edss9i"
                alt="fssai"
                style={{ width: "60px", height: "30px" }}
              />
            </div>
            <div>
              <p
                className="mt-3 pt-2"
                style={{ fontSize: "0.82rem", color: "#93959f" }}
              >
                License No. 22721677000084
              </p>
            </div>
          </div>
          <hr className="mx-3" />
          <div style={{ paddingBottom: "120px" }}>
            <p
              className="ms-3 mb-0 fw-bold"
              style={{ fontSize: "14px", color: "#93959f" }}
            >
              {product.name}
            </p>
            <p className="ms-3" style={{ fontSize: "14px", color: "#93959f" }}>
              (Outlet:Meerut Cantt)
            </p>
            <p className="ms-3" style={{ fontSize: "12px", color: "#a9abb2" }}>
              AJAY RASTOGI: 38, SUBHASH BAZAR, NEAR KOTWALI, WARD NO 54, SWAMI
              PARA, ZONE-7, MEERUT, UTTAR PRADESH-250002
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
