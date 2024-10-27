import React, { useContext, useEffect, useState } from "react";
import "./Placeholder.css";
import { StoreContext } from "../../Context/StoreContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Placeholder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    pin_code: "",
    area: "",
    phone: "",
    state: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();

    let orderItems = [];
    food_list.forEach((item) => {  // Changed from map to forEach
      if (cartItems[item._id] > 0) {
        let itemInfo = { ...item, quantity: cartItems[item._id] };  // Spread syntax to avoid mutation
        orderItems.push(itemInfo);
      }
    });
    let orderData={
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+40,//40 is delivery charge
    }
    let response=await axios.post(url+"/api/order/place",orderData,{headers:{token}});
    if(response.data.success)
    {
      const {session_url}=response.data;
      window.location.replace(session_url);
    }
    else{
      alert("Error");
    }
}
  
const navigate = useNavigate();  

   useEffect(()=>{
    if(!token)
    {
      navigate('/cart')
    }
    else if(getTotalCartAmount()===0)
    {
      navigate('/cart')
    }
   },[token])


  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input required
            name="firstName"
            onChange={onChangeHandler}
            value={data.firstName}
            type="text"
            placeholder="First Name"
          />
          <input required
            name="lastName"
            onChange={onChangeHandler}
            value={data.lastName}
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input required
          name="street"
          onChange={onChangeHandler}
          value={data.street}
          type="text"
          placeholder="Street"
        />
        <input required
          name="area"
          onChange={onChangeHandler}
          value={data.area}
          type="text"
          placeholder="Area"
        />
        <div className="multi-fields">
          <input required
            name="pin_code"
            onChange={onChangeHandler}
            value={data.pin_code}
            type="text"
            placeholder="Pin-Code"
          />
          <input required
            name="city"
            onChange={onChangeHandler}
            value={data.city}
            type="text"
            placeholder="City"
          />
        </div>
        <div className="multi-fields">
          <input required
            name="state"
            onChange={onChangeHandler}
            value={data.state}
            type="text"
            placeholder="State"
          />
          <input required
            name="phone"
            onChange={onChangeHandler}
            value={data.phone}
            type="text"
            placeholder="Phone"
          />
        </div>
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Rs{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>Rs{getTotalCartAmount() === 0 ? 0 : 40}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                Rs{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 40}
              </b>
            </div>
          </div>
          <button type="submit">PROCEED TO Payment</button>
        </div>
      </div>
    </form>
  );
};

export default Placeholder;
