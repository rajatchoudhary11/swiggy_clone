import { Link, useNavigate } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";
import swiggylogo from "../Mainpage/Images/swiggylogo.png";
function Header() {
  const [text] = useTypewriter({
    words: [
      "Unexpected guest",
      "Cooking gone wrong",
      "Movie marathon",
      "Game night",
      "Late night at office",
      "Hungry",
    ],
    loop: {},
  });

  return (
    <>
      <div className="d-flex bg-white">
        <div style={{width:"775px"}}>
          <div>
            <Login />
          </div>
          <div>
            <h1 className="ms-5 mt-5"> {text}?</h1>
            <p className="mb-5 ms-5 fs-4">
              Order food from favourite restaurants near you.
            </p>
          </div>
          <div>
            <Input />
          </div>
          <div>
            <h6 className="ms-5 text-secondary mb-3">
              POPULAR CITIES IN INDIA
            </h6>
          </div>
          <div className="ms-5 fs-6">
            <Link className="me-2 text-decoration-none text-dark" to="/">
              Ahmedabad
            </Link>
            <Link className="me-2 text-decoration-none text-secondary" to="/">
              Bangalore
            </Link>
            <Link className="me-2 text-decoration-none text-dark" to="/">
              Chennai
            </Link>
            <Link className="me-2 text-decoration-none text-secondary" to="/">
              Delhi
            </Link>
            <Link className="me-2 text-decoration-none text-dark" to="/">
              Gurgaon
            </Link>
            <Link className="me-2 text-decoration-none text-secondary" to="/">
              Hyderabad
            </Link>
            <Link className="me-2 text-decoration-none text-dark" to="/">
              Kolkata
            </Link>
            <Link className="me-2 text-decoration-none text-secondary" to="/">
              Mumbai
            </Link>
            <br />
            <Link className="me-2 text-decoration-none text-dark" to="/">
              Pune
            </Link>
            <Link className="me-2 text-decoration-none text-secondary" to="/">
              & more.
            </Link>
          </div>
        </div>
        <div>
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Lunch1_vlksgq"
            alt="lunch"
            style={{height:"550px"}}
          />
        </div>
      </div>
    </>
  );
}

function Login() {
  return (
    <>
      <div className="d-flex justify-content-between my-4">
        <div>
          <img src={swiggylogo} alt="swiggylogo" className="mt-5 ms-5" style={{width:"180px"}}/>
        </div>
        <div className="mt-5 me-5">
          <Link
            className="text-decoration-none text-dark fw-bold loginlink"
            to="/"
          >
            Login
          </Link>
          <button className="btn btn-dark ms-5 ">Signup</button>
        </div>
      </div>
    </>
  );
}

function Input() {
  const navigate = useNavigate();
  return (
    <div className="mx-5 mb-5 ">
      <div className="input-group mb-3 ">
        <input
          type="text"
          className="form-control fs-3"
          placeholder="Enter your delivery location"
        />
        <button
          onClick={() => navigate("/searchpage")}
          className="btn btn-outline-warning"
          type="button"
          id="button-addon2"
        >
          FIND FOOD
        </button>
      </div>
    </div>
  );
}

export default Header;
