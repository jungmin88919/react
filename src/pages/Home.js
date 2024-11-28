import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import SwiperCore, { Navigation, Scrollbar } from "swiper";
import { useNavigate } from "react-router-dom";
import products from "../mock/products.json";
import Banner from "../components/Banner";

SwiperCore.use([Navigation, Scrollbar]);

const Home = () => {

  const navigate = useNavigate(); 

  const handleSlideClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div>
      {/* 메인 슬라이드 */}
      <Banner />
      <div className="brand-container" style={styles.container}>
        <h2 className="brand-title">The moment you shine, GLINT</h2>
        <p className="brand-description" style={styles.desc}>
          당신이 가장 반짝이는 순간
        </p>
      </div>
      <div className="brand-img" style={styles.brandImg}>
        <img src={`${process.env.PUBLIC_URL}/assets/mainbanner01.jpg`} alt="" style={styles.productImg} />
        <div>
          <h3 style={styles.brandTitle}>NEW PRODUCT</h3>
          <p style={styles.brandDesc}>
            어떤 립이든 2배 예뻐보이게.
            <br />
            영롱한 펄광, 탱글한 볼륨, 깊은 보습력까지!
            <br />
            글린트의 내추럴 립 플럼퍼 립세린과 함께 남다른 립케어 루틴을
            시작해보세요.
          </p>
          <p style={styles.line}></p>
          <button style={styles.button} onClick={() => handleSlideClick()} >READ MORE</button>
        </div>
      </div>
      <div style={styles.productBox}>
        <h3 style={styles.brandTitle}>BEST PRODUCT</h3>
        <p style={styles.brandDesc}>당신의 일상을 반짝임으로 깨우는 글린트의 베스트 제품들을 만나보세요.</p>
        
        {/* Swiper 적용 */}
        <Swiper
          slidesPerView={4}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 3000 }}
          loop
        >
          {products.map((product) => (
            <SwiperSlide key={product.id} onClick={() => handleSlideClick(product.id)} style={styles.swiperSlide}>
              <div style={{ textAlign: "center", cursor: "pointer" }}>
                <img
                  src={`${process.env.PUBLIC_URL}${product.image}`}
                  alt={product.name}
                  style={{ width: "100%", objectFit: "cover", marginBottom:"28px" }}
                />
                <h3>{product.name}</h3>
                <p
                  style={{marginTop:"15px", fontSize:"15px", marginBottom:"50px"}}
                >{product.price.toLocaleString()}원</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    padding: "80px 0",
    fontSize: "3rem",
    color: "#666",
    fontFamily: "serif",
  },
  desc: {
    marginTop: "30px",
    fontSize: "1.5rem",
    fontFamily: "san-serif",
  },
  brandImg: {
    textAlign: "center",
  },
  productImg: {
    width: "80%",
    marginBottom:"20px",
  },
  brandTitle: {
    fontSize: "30px",
    marginBottom: "24px",
    fontWeight:"700",
  },
  brandDesc: {
    fontSize: "15px",
    lineHeight: "1.7",
    color: "#666",
  },
  line: {
    display: "block",
    width: "1px",
    height: "80px",
    margin: "30px auto 20px",
    backgroundColor: "#999",
  },
  button: {
    padding: "11px 46px",
    border: "1px solid #999",
    borderRadius: "36px",
    textAlign: "center",
    color: "#333",
    backgroundColor: "#fff",
  },
  productBox: {
    padding:"80px 0 40px",
    textAlign:"center",
  },
  swiperSlide: {
    paddingTop: "40px",
  }
};

export default Home;
