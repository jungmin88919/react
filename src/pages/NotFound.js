import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>페이지를 찾을 수 없습니다.</p>
      <Link to="/" style={styles.link}>홈으로 돌아가기</Link>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
  },
  title: {
    fontSize: "5rem",
    fontWeight: "bold",
    color: "#333",
  },
  message: {
    fontSize: "1rem",
    margin: "20px 0",
    color: "#666",
  },
  link: {
    fontSize: "0.8rem",
    color: "#333",
    textDecoration: "none",
  },
};

export default NotFound;
