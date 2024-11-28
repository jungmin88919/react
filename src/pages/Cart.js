import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromCart, updateQuantity } from "../redux/cartSlice";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>장바구니</h1>

      {cartItems.length === 0 ? (
        <div style={styles.emptyMessage}>
          <p>장바구니가 비어 있습니다.</p>
          <button onClick={() => navigate("/shop")} style={styles.shopButton}>
            쇼핑하러 가기
          </button>
        </div>
      ) : (
        <div>
          <div style={styles.cartItems}>
            {cartItems.map((item) => (
              <div key={item.id} style={styles.cartItem}>
                <img src={`${process.env.PUBLIC_URL}${item.image}`} alt={item.name} style={styles.image} />
                <div style={styles.details}>
                  <h3>{item.name}</h3>
                  <p>{item.options?.join(", ")}</p>
                  <p>{item.price.toLocaleString()}원</p>
                  <div style={styles.quantity}>
                    <button style={styles.button} onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button style={styles.button} onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <button onClick={() => handleRemove(item.id)} style={styles.removeButton}>
                    삭제
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={styles.summary}>
            <h3>총 금액: {totalPrice.toLocaleString()}원</h3>
            <button style={styles.purchaseButton}>구매하기</button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    margin:"100px auto",
    padding: "20px",
  },
  title: {
    textAlign: "center",
    fontSize: "24px",
    marginBottom: "20px",
  },
  emptyMessage: {
    textAlign: "center",
    marginTop: "50px",
  },
  shopButton: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "##fff",
    color: "#000",
    border: "1px solid #333",
    cursor: "pointer",
  },
  cartItems: {
    width:"100%",
  },
  cartItem: {
    display:"flex",
    width:"100%",
    borderBottom: "1px solid #ddd",
    paddingBottom: "20px",
  },
  image: {
    width: "80px",
    height: "100px",
    objectFit: "cover",
    margin:"0 50px 0 0",
  },
  details: {
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    width:"100%",
  },
  quantity: {
    display: "flex",
    gap: "10px",
    alignItems: "center",
  },
  button: {
    border:"none",
    backgroundColor:"#fff",
  },
  removeButton: {
    marginTop: "10px",
    padding: "5px 10px",
    backgroundColor: "#fff",
    color: "#000",
    border: "1px solid #333",
    cursor: "pointer",
  },
  summary: {
    textAlign: "right",
    marginTop: "30px",
  },
  purchaseButton: {
    padding: "10px 20px",
    marginTop:"10px",
    fontSize: "16px",
    backgroundColor: "#fff",
    color: "#000",
    border: "1px solid #333",
    cursor: "pointer",
  },
};

export default Cart;
