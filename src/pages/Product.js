import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addToCart } from "../redux/cartSlice";
import products from "../mock/products.json";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [options, setOptions] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(product?.price || 0);

  const availableOptions = [
    { name: "01 듀이 문", price: 24000 },
    { name: "02 다이아몬드 베일", price: 24000 },
    { name: "03 피치 문", price: 24000 },
  ];

  if (!product) {
    return <Message>상품을 찾을 수 없습니다.</Message>;
  }

  // 옵션 추가
  const addOption = (option) => {
    if (!options.some((opt) => opt.name === option.name)) {
      const updated = [...options, option];
      setOptions(updated);
      setPrice(updated.reduce((acc, curr) => acc + curr.price, 0));
    }
  };

  // 옵션 삭제
  const removeOption = (name) => {
    const updated = options.filter((opt) => opt.name !== name);
    setOptions(updated);
    setPrice(updated.reduce((acc, curr) => acc + curr.price, 0));
  };

  // 장바구니에 추가
  const handleAddToCart = () => {
    const cartItem = {
      id: product.id,
      name: product.name,
      price: price,
      quantity: quantity,
      options: options.map((opt) => opt.name), // 선택된 옵션
      image: product.image,
    };
    dispatch(addToCart(cartItem));
    alert("장바구니에 추가되었습니다!");
  };

  // 구매하기
  const handleBuyNow = () => {
    handleAddToCart(); // 먼저 장바구니에 추가
    navigate("/cart"); // 장바구니 페이지로 이동
  };

  return (
    <Wrapper>
      <Content>
        <ImageBox>
          <Image src={`${process.env.PUBLIC_URL}${product.image}`} alt={product.name} />
        </ImageBox>
        <Details>
          <Title>{product.name}</Title>
          <Price>{product.price.toLocaleString()}원</Price>
          <Description>{product.desc || "제품 설명을 추가하세요."}</Description>

          <OptionSelector>
            <label htmlFor="options">색상 선택:</label>
            <Select
              id="options"
              onChange={(e) =>
                e.target.value && addOption(JSON.parse(e.target.value))
              }
            >
              <option value="">선택하세요</option>
              {availableOptions.map((option, index) => (
                <option key={index} value={JSON.stringify(option)}>
                  {option.name} (+{option.price.toLocaleString()}원)
                </option>
              ))}
            </Select>
          </OptionSelector>

          {options.length > 0 && (
            <SelectedOptions>
              <h3>선택한 옵션</h3>
              {options.map((opt, index) => (
                <Option key={index}>
                  <span>{opt.name}</span>
                  <RemoveButton onClick={() => removeOption(opt.name)}>
                    삭제
                  </RemoveButton>
                </Option>
              ))}
            </SelectedOptions>
          )}

          <Summary>
            <h3>총 가격</h3>
            <TotalPrice>{price.toLocaleString()}원</TotalPrice>
          </Summary>

          <Buttons>
          <ActionButton primary onClick={handleBuyNow}>
            구매하기
          </ActionButton>
          <ActionButton onClick={handleAddToCart}>장바구니</ActionButton>
        </Buttons>
        </Details>
      </Content>
    </Wrapper>
  );
};

export default ProductDetail;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 100px 20px;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
  max-width: 1200px;
  gap: 20px;
`;

const ImageBox = styled.div`
  max-width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-width: 100%;
`;

const Details = styled.div`
  max-width: 30%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 28px;
  line-height: 1.4;
`;

const Price = styled.p`
  font-size: 24px;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 14px;
  line-height:22px;
  color: #666;
`;

const OptionSelector = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  select {
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;

const Select = styled.select``;

const SelectedOptions = styled.div`
  border-top: 1px solid #ddd;
  padding-top: 20px;

  h3 {
    margin-bottom: 10px;
    font-size: 18px;
  }
`;

const Option = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const RemoveButton = styled.button`
  padding: 5px 10px;
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

const Summary = styled.div`
  display:flex;
  justify-content:space-between;
  border-top: 1px solid #ddd;
  padding-top: 20px;
`;

const TotalPrice = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #000;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ActionButton = styled.button`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: ${(props) => (props.primary ? "#fff" : "#333")};
  background-color: ${(props) => (props.primary ? "#000" : "#f8f9fa")};
  border: ${(props) => (props.primary ? "none" : "1px solid #ccc")};
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.primary ? "#333" : "#e2e6ea")};
  }
`;

const Message = styled.p`
  text-align: center;
  font-size: 18px;
  color: #666;
  margin: 200px auto
`;
