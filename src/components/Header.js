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
    position:"sticky",
    top:"0",
    zIndex:"10",
    justifyContent: "space-between",
    alignItems: "center",
    width:"100%",
    height:"90px",
    backgroundColor: "rgba(255,255,255,0.5)"
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
    padding:"0 20px"
  },
  navLink: {
    textDecoration: "none",
    color: "#333"
  }
};

export default Header;
