import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <div className="d-flex justify-content-between mx-5 my-4">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza"
            alt="footerlogo"
            style={{ width: "150px", height: "40px" }}
          />
        </Link>
        <p style={{ color: "white", fontSize: "21px" }}>&copy; 2022 Swiggy</p>
        <div
          style={{
            width: "200px",
          }}
          className="d-flex justify-content-evenly align-content-center"
        >
          <Link to="/">
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-facebook_tfqsuc"
              alt="icons"
              style={{ width: "24px", height: "24px" }}
            />
          </Link>
          <Link to="/">
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-pinterest_kmz2wd"
              alt="icons"
              style={{ width: "24px", height: "24px" }}
            />
          </Link>
          <Link to="/">
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-instagram_b7nubh"
              alt="icons"
              style={{ width: "24px", height: "24px" }}
            />
          </Link>
          <Link to="/">
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_48,h_48/icon-twitter_gtq8dv"
              alt="icons"
              style={{ width: "24px", height: "24px" }}
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default Footer;
