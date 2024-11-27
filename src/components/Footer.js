import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>© 2024 GLINT Beauty. All rights reserved.</p>
      <p style={styles.text}>문의: contact@glint.com</p>
    </footer>
  );
};

const styles = {
  footer: {
    padding: "20px 0",
    textAlign: "center",
    backgroundColor: "#f1f1f1",
    borderTop: "1px solid #ddd",
    marginTop: "auto"
  },
  text: {
    margin: "5px 0",
    fontSize: "14px",
    color: "#666"
  }
};

export default Footer;
