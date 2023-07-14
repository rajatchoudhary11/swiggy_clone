import React from "react";
import {
  CityDatas_1,
  CityDatas_2,
  CityDatas_3,
  CityDatas_4,
} from "../Districtdatas";
import { Link } from "react-router-dom";
function Section2() {
  return (
    <>
      <div>
        <div>
          <h6 className="text-secondary fw-bold ms-5 mt-5 mb-3">
            WE DELIEVER TO{" "}
          </h6>
        </div>
        <div className="d-flex justify-content-between">
          <div className="ms-5">
            {CityDatas_1.map((i, index) => (
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
          <div className="ms-5">
            {CityDatas_2.map((i, index) => (
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
          <div className="ms-5">
            {CityDatas_3.map((i, index) => (
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
          <div className="me-5 pe-5">
            {CityDatas_4.map((i, index) => (
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
        <hr className="mt-4 mx-5 text-white" style={{ width: "1250px" }} />
      </div>
    </>
  );
}

export default Section2;
