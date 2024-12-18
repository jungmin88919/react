import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import products from "../mock/products.json";

const Shop = () => {
  return (
    <Container>
      <Title>SHOP</Title>
      <ProductList>
        {products.map((product) => (
          <ProductItem key={product.id}>
            <Link to={`/product/${product.id}`} style={{ textDecoration: "none", color: "#333" }}>
              <ProductImage src={`${process.env.PUBLIC_URL}${product.image}`} alt={product.name} />
              <ProductName>{product.name}</ProductName>
              <ProductPrice>{product.price.toLocaleString()}원</ProductPrice>
            </Link>
          </ProductItem>
        ))}
      </ProductList>
    </Container>
  );
};

export default Shop;

// Styled Components
const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 100px auto;
`;

const Title = styled.h2`
  display:block;
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
`;

const ProductList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap:30px;
`;

const ProductItem = styled.div`
  text-align: center;
  overflow: hidden;
  width:calc(33.3333% - 30px);
`;

const ProductImage = styled.img`
  object-fit: cover;
`;

const ProductName = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  color: #333;
  margin-bottom: 10px;
`;
