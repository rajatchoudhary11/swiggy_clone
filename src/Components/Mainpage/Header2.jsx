function Header2() {
  return (
    <>
      <div className="d-flex justify-content-around bg-dark text-white text-center">
        <div  style={{width:"300px"}}>
          <Order
            orderimage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf"
            ordername="No Minimum Order"
            orderdesc="Order in for yourself or for the group, with no restrictions on order value"
          />
        </div>

        <div style={{width:"300px"}}>
          <Order
            orderimage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy"
            ordername="Live Order Tracking"
            orderdesc="Know where your order is at all times, from the restaurant to your doorstep"
          />
        </div>

        <div className=" mb-5" style={{width:"300px"}}>
          <Order
            orderimage="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn"
            ordername="Lightning-Fast Delivery"
            orderdesc="Experience Swiggy's superfast delivery for food delivered fresh & on time"
          />
        </div>
      </div>
    </>
  );
}

function Order(props) {
  return (
    <div>
      <img
        src={props.orderimage}
        alt={props.ordername}
        className="mb-5 mt-2"
        style={{height:"150px"}}
      />
      <div>
        <h3>{props.ordername}</h3>
        <p>{props.orderdesc}</p>
      </div>
    </div>
  );
}

export default Header2;
