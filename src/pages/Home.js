import React from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import BoxText from "components/BoxText";
import ShipBox from "components/ShipBox";

function Home() {
  let { t, i18n } = useTranslation();
  return (
    <>
      <Header lang={i18n.language}>
        <ConTainer>
          <Text>
            <h1>{t("home.head")}</h1>
            <p>{t("home.paragraph")}</p>
            <button>{t("home.bosta")}</button>
          </Text>
        </ConTainer>
      </Header>
      <ConTainer>
        <div>
          <TextPartner>
            <h3>{t("home.partnerH")}</h3>
            <p>{t("home.partnerP")}</p>
          </TextPartner>
          <SwiperWrapper>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
              onSlideChange={() => console.log("slide change")}
            >
              <SwiperSlide>
                <img src="/assets/Home/partner-amazon.svg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/Home/partner-fawry.svg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/Home/partner-lynks.svg" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/Home/partner-palma-300x47.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/Home/partner-vezeeta.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/assets/Home/partner-yashry.png" alt="" />
              </SwiperSlide>
            </Swiper>
          </SwiperWrapper>
        </div>
        <div>
          <TextPartner>
            <h3>{t("home.why")}</h3>
          </TextPartner>
          <PartnerConteainer>
            <ImagContainer>
              <img src="/assets/Track-Shipments.png" alt="" />
            </ImagContainer>
            <div>
              <BoxText
                head={t("home.follow")}
                text={t("home.whyText")}
                img="/assets/wayBost/Group-366-1-1.svg"
              />
              <BoxText
                head={t("home.manage")}
                text={t("home.whyText")}
                img="/assets/wayBost/Group-368.svg"
              />
              <BoxText
                head={t("home.commerce")}
                text={t("home.whyText")}
                img="/assets/wayBost/Group-369.svg"
              />

              <Button>Contact Sales</Button>
            </div>
          </PartnerConteainer>
        </div>

        <div>
          <TextPartner>
            <h3>{t("home.whyShip")}</h3>
          </TextPartner>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <ShipBox
              img="/assets/shipwith/Group-756-svg-1.svg"
              head={t("home.nextH")}
              text={t("home.nextP")}
            />
            <ShipBox
              img="/assets/shipwith/Group-789-svg-1.svg"
              head={t("home.exchangeH")}
              text={t("home.exchangeP")}
            />
            <ShipBox
              img="/assets/shipwith/Group-756-svg-1.svg"
              head={t("home.customerH")}
              text={t("home.customerP")}
            />
            <ShipBox
              img="/assets/shipwith/Group-817-svg-2.svg"
              head={t("home.cashH")}
              text={t("home.cashP")}
            />
          </div>
        </div>
      </ConTainer>
      <Fotter>
        <p>Copyright ©2019 bosta.co</p>
      </Fotter>
    </>
  );
}

let Header = styled.div`
  background-image: url("/assets/bosta-banner.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 80vh;
  clip-path: ${(props) =>
    props.lang === "en"
      ? "polygon(0 0, 100% 0%, 100% 85%, 0% 100%)"
      : "polygon(0 0, 100% 0%, 100% 100%, 0% 85%)"};
  z-index: -1;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`;
let ConTainer = styled.div`
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 10px;
  height: inherit;
`;
let Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: inherit;
  margin-bottom: 20px;
  color: white;
  font-family: "Roboto", sans-serif;

  h1 {
    font-size: 40px;
  }
  p {
    font-size: 20px;
    max-width: 700px;
  }
  button {
    align-self: start;
    margin-top: 20px;
    padding: 15px 35px;
    border-radius: 50px;
    color: white;
    background-color: red;
  }
`;

let TextPartner = styled.div`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  h3 {
    font-size: 35px;
    color: red;
  }
  p {
    margin: 0 auto;
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    max-width: 900px;
  }
`;

let SwiperWrapper = styled.div`
  max-width: 900px;
  margin: 10px auto;
  .swiper {
    z-index: -1;
    height: 100px;
  }
  .swiper-pagination {
    bottom: -5px;
  }
`;

let Button = styled.button`
  background: red;
  border: none;
  padding: 15px 25px;
  border-radius: 50px;
  color: white;
  font-weight: bold;
  margin: 20px auto;
`;

let PartnerConteainer = styled.div`
  display: flex;
  align-ittems: center;
  gap: 20px;
`;
let ImagContainer = styled.div`
  flex: 1;
  img {
    width: 100%;
  }
`;

let Fotter = styled.div`
  background-color: black;
  color: white;
  padding: 15px;
  text-align: center;
`;

export default Home;
