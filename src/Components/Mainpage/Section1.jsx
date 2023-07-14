import React from "react";
import {
  Contactdatas_1,
  Contactdatas_2,
  Contactdatas_3,
} from "../Contactdatas";
import { Link } from "react-router-dom";
function Section1() {
  return (
    <>
      <div className="d-flex justify-content-between bg-black">
        <div className="mt-5 ms-5 pt-3 mb-3">
          <h6 className="text-secondary fw-bold mb-4">COMPANY</h6>
          <div>
            {Contactdatas_1.map((i, index) => (
              <div className="my-2 ciiteslink">
                <Link
                  to="/"
                  key={index}
                  className="text-decoration-none text-white"
                >
                  {i}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5 pt-3 ms-5 mb-3">
          <h6 className="text-secondary fw-bold mb-4">CONTACT</h6>
          <div>
            {Contactdatas_2.map((i, index) => (
              <div className="my-2 ciiteslink">
                <Link
                  to="/"
                  key={index}
                  className="text-decoration-none text-white"
                >
                  {i}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5 pt-3 ms-5 ps-3 mb-3" style={{ width: "350px" }}>
          <h6 className="text-secondary fw-bold mb-4">LEGAL</h6>
          <div>
            {Contactdatas_3.map((i, index) => (
              <div className="my-2 ciiteslink">
                <Link
                  to="/"
                  key={index}
                  className="text-decoration-none text-white"
                >
                  {i}
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="d-flex flex-column ">
          <div>
            <Link>
              <img
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
                alt="playstore"
                className="me-5 mt-5 pt-3 "
              />
            </Link>
          </div>
          <div>
            <Link>
              <img
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
                alt="googleplay"
                className="me-5 mt-4 "
              />
            </Link>
          </div>
        </div>
      </div>
      <hr className="my-0 mx-5 text-white" style={{ width: "1250px" }} />
    </>
  );
}

export default Section1;
