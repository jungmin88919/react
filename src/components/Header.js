import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>
        <Link to="/">GLINT</Link>
      </div>
      <nav style={styles.nav}>
        <Link to="/shop" style={styles.navLink}>SHOP</Link>
      </nav>
      <nav style={styles.nav}>
        <Link to="/cart" style={styles.navLink}>CART</Link>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    position:"relative",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#f8f9fa",
    borderBottom: "1px solid #ddd"
  },
  logo: {
    position:"absolute",
    left:"50%",
    transform:"translateX(-50%)",
    fontSize: "24px",
    color:"#000",
    fontWeight: "bold"
  },
  nav: {
    display: "flex",
    gap: "15px"
  },
  navLink: {
    textDecoration: "none",
    color: "#333"
  }
};

export default Header;
