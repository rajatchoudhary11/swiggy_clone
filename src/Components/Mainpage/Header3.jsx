import { Link } from "react-router-dom";
function Header3() {
  return (
    <>
      <div className="bg-white">
        <div className="d-flex justify-content-evenly ms-5">
          <div className="mt-5 pt-5" style={{width:"500px"}}>
            <Firstdiv />
          </div>
          <div style={{width:"300px"}}>
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n"
              alt="mobile"
              style={{ width: "350px" }}
            />
          </div>
          <div className=" mt-5 pt-5 " style={{width:"300px"}}>
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn"
              alt="mobile"
              style={{ width: "350px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

function Firstdiv() {
  return (
    <>
      <div className="mt-5 fw-bold " style={{ width: "300px" }}>
        <h1 className="lh-1">Restaurants in your pocket</h1>
      </div>
      <div
        className="fs-6 fw-normal text-secondary mt-3 mb-5"
        style={{ width: "350px" }}
      >
        <p>
          Order from your favorite restaurants & track on the go, with the
          all-new Swiggy app.
        </p>
      </div>
      <div
        className="d-flex justify-content-between"
        style={{ width: "350px" }}
      >
        <div>
          <Link to="/">
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp"
              alt="googleplay"
              style={{ width: "170px" }}
            />
          </Link>
        </div>
        <div>
          <Link to="/">
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty"
              alt="appstore"
              style={{ width: "170px" }}
            />
          </Link>
        </div>
      </div>
    </>
  );
}
export default Header3;
