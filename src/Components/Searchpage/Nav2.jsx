import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";
import Restaurant from "./Restaurant";
function Nav2() {
  return (
    <>
      <div className="bg-white ">
        <div className="d-flex justify-content-between bg-white ">
          <div className="ms-5 mt-4">
            <h3>10 restaurants</h3>
          </div>
          <div className="me-5 mt-4 pt-2">
            <Link
              className="mx-3 text-decoration-none tab text-secondary"
              to="relevance"
            >
              Relevance
            </Link>
            <Link
              className="mx-3 text-decoration-none tab text-secondary"
              to="delivery"
            >
              Delivery Time
            </Link>
            <Link
              className="mx-3 text-decoration-none tab text-secondary"
              to="rating"
            >
              Rating
            </Link>
            <Link
              className="mx-3 text-decoration-none tab text-secondary"
              to="costl"
            >
              Cost: Low To High
            </Link>
            <Link
              className="mx-3 text-decoration-none tab text-secondary"
              to="costh"
            >
              Cost: High To Low
            </Link>
            <Link
              className="mx-3 text-decoration-none tab text-secondary"
              to="filter"
            >
              Filters
              <FontAwesomeIcon
                icon={faCirclePlus}
                className="mx-2 fs-5"
                style={{ color: "orange" }}
              />
            </Link>
            <Outlet />
          </div>
        </div>
        <hr className="mt-0 mx-5 text-dark" style={{ width: "1250px" }} />
        <div className="pt-1 pb-5 ">
          <Restaurant />
        </div>
      </div>
    </>
  );
}

export default Nav2;
