import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Meals from "./Meals";

function Restaurant() {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(
      {pathname:"/product",
      search:`?id=${id}`} 
      )
  }
  return (
    <>
      <div className="d-flex flex-wrap  mt-5 " style={{ gap: "9px" }}>
        {Meals.map((item) => (
          <div
            className="flex-column food ms-5 me-2 mb-5 "
            style={{
              padding: "10px 10px 20px 10px",
              contain: "content",
              maxWidth: "300px",
              height: "350px",
              cursor: "pointer",
              
            }}
            onClick={()=> handleClick(item.id)} 
            key={item.id}
          >
            <img
              className="mb-2"
              style={{ width: "254px", height: "160px", objectFit: "cover" }}
              src={item.src}
              alt={item.alt}
            />
            <h6 style={{ maxWidth: "250px" }}>{item.name}</h6>
            <p
              className=" text-secondary lh-1"
              style={{ maxWidth: "250px", fontSize: "14px" }}
            >
              {item.desc}
            </p>
            <div className="d-flex justify-content-between">
              <div
                className="rating pe-1 text-white"
                style={{
                  border: "1px solid lightgrey",
                  backgroundColor: item.rating < 4 ? "#db7c38" : "#48c479",
                }}
              >
                <FontAwesomeIcon
                  icon={faStar}
                  className="mx-1 "
                  style={{ fontSize: "12px" }}
                />
                {item.rating}
              </div>
              <div className="text-secondary" style={{ fontSize: "10px" }}>
                •
              </div>
              <div className="time text-secondary">{item.time}</div>
              <div className="text-secondary" style={{ fontSize: "10px" }}>
                •
              </div>
              <div className="price text-secondary">{item.price}</div>
            </div>
            <div className="text-center text text-primary  mb-0">
              <hr/>
           <p>Quick View</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Restaurant;
