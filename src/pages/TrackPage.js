import React, { useContext } from "react";
import styled from "styled-components";
import { BsCheckLg } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { AiOutlineDeliveredProcedure } from "react-icons/ai";
import moment from "moment";
import { useTranslation } from "react-i18next";
import { DataContext } from "../Context/DataContext";
let status = {
  DELIVERED: {
    text: "تم تسليم الشحنة",
    width: "100%",
    color: "green",
  },
  DELIVERED_TO_SENDER: {
    text: "تم أرجاع الشحنة",
    width: "60%",
    widthIcon: "",
    color: "#fbbb39",
  },
  OUT_FOR_DELIVERY: {
    text: "تم خروج الشحنة",
    width: "60%",
    color: "green",
  },
  WAITING_FOR_CUSTOMER_ACTION: {
    text: "تأجيل - العميل طلب التاجيل ليوم اخر",
    width: "60%",
    color: "yellow",
  },
};

let tabelText = {
  TICKET_CREATED: "تم إنشاء الشحنة",
  PACKAGE_RECEIVED: "تم إستلام الشحنة من التاجر",
  IN_TRANSIT: "في الطريق",
  NOT_YET_SHIPPED: "لم يتم شحنها بعد ",
  OUT_FOR_DELIVERY: "الشحنة خرجت للتسليم",
  WAITING_FOR_CUSTOMER_ACTION: "",
  DELIVERED: "تم تسليم الشحنة",
};

function TrackPage(props) {
  let { data } = useContext(DataContext);
  let { i18n } = useTranslation();
  return (
    <Container>
      <TimeLineContainer>
        <TimeLineInfo>
          <div>
            <h3>رقم الشحنة {data?.TrackingNumber}</h3>
            <h4> {status[data?.CurrentStatus?.state]?.text} </h4>
          </div>
          <div>
            <h3>اخر تحديث</h3>
            <h4>{moment(data?.CurrentStatus.timestamp).format("LLL")}</h4>
          </div>
          <div>
            <h3>اسم التاجر</h3>
            <h4>-</h4>
          </div>
          <div>
            <h3>موعد تسلم الشحنة </h3>
            <h4>{moment(data?.CurrentStatus.timestamp).format("LLL")}</h4>
          </div>
        </TimeLineInfo>

        <TimeLineTrackContainer>
          <LineTrack>
            <Back></Back>
            <Front
              deleverPercent={status[data?.CurrentStatus?.state]?.width}
              color={status[data?.CurrentStatus?.state]?.color}
            ></Front>

            <div>
              <BoxIconFirst
                lang={i18n.language}
                color={status[data?.CurrentStatus?.state]?.color}
              >
                <BsCheckLg />
              </BoxIconFirst>
              <BoxIconSecond
                lang={i18n.language}
                color={status[data?.CurrentStatus?.state]?.color}
              >
                <BsCheckLg />
              </BoxIconSecond>
              <BoxIconThird
                lang={i18n.language}
                color={status[data?.CurrentStatus?.state]?.color}
              >
                <FaShippingFast />
              </BoxIconThird>
              <BoxIconFourth
                lang={i18n.language}
                color={status[data?.CurrentStatus?.state]?.color}
              >
                <AiOutlineDeliveredProcedure />
              </BoxIconFourth>
            </div>
          </LineTrack>

          <TrackInfo>
            <div>
              <h3>تم إنشاء الشحنة </h3>
            </div>
            <div>
              <h3>تم إستلام الشحنة من التاجر</h3>
            </div>
            <div>
              <h3>الشحنة خرجت للتسليم</h3>
              <p
                style={{
                  color: status[data?.CurrentStatus?.state]?.color,
                }}
              >
                {" "}
                {status[data?.CurrentStatus?.state]?.text}{" "}
              </p>
            </div>
            <div style={{ marginInlineStart: "80px" }}>
              <h3> تم التسليم</h3>
            </div>
          </TrackInfo>
        </TimeLineTrackContainer>
      </TimeLineContainer>
      <TrackDetails>
        <TrackDetailsInfo>
          <h4>تفاصيل الشحنة</h4>
          <div>
            <table>
              <thead>
                <tr>
                  <th>الفرع</th>

                  <th>التاريخ</th>

                  <th>الوقت</th>

                  <th>تفاصيل</th>
                </tr>
              </thead>
              <tbody>
                {data?.TransitEvents.map((el, i) => {
                  return (
                    <tr key={Date.now() + i}>
                      <td>{el?.hub ?? "---"}</td>
                      <td>{moment(el.timestamp).format("L")}</td>
                      <td>{moment(el.timestamp).format("LT")}</td>
                      <td>
                        {tabelText[el.state] === "WAITING_FOR_CUSTOMER_ACTION"
                          ? el?.reason
                          : tabelText[el.state]}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </TrackDetailsInfo>
        <TrackDetailsAddress>
          <h4>عنوان التسليم</h4>
          <Address>
            <p>
              أمبابة شارع طلعت حرب مدينة العمال بحوار البرنس منزل ١٧ بلوك ٣٣
              القاهرة
            </p>
          </Address>
          <Complain>
            <div className="img-container">
              <img
                src="/assets/customer-problem.89c7b4cc70a4e330fc858f7a2746d935.svg"
                alt=""
              />
            </div>
            <div>
              <p className="text">هل توجد مشكلة في شحنتك؟!</p>
              <a className="phone" href="tel:19043">
                إبلاغ عن مشكلة
              </a>
            </div>
          </Complain>
        </TrackDetailsAddress>
      </TrackDetails>
    </Container>
  );
}

let Container = styled.div`
  max-width: 1320px;
  width: 100%;
  margin: 0 auto;
`;

let TimeLineContainer = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  margin-bottom: 1.5rem;
`;

let TimeLineInfo = styled.div`
  grid-gap: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
  padding: 20px;
`;

let TrackInfo = styled(TimeLineInfo)`
  grid-gap: 4rem;
`;

let TimeLineTrackContainer = styled.div`
  width: 100%;
  padding: 3rem 1rem 1rem;
`;
let LineTrack = styled.div`
  width: 85%;
  height: 10px;
  position: relative;
  margin-inline-start: 30px;
  z-index: -1;
`;

let Back = styled.div`
  width: 100%;
  height: 10px;
  position: absolute;
  top: 0;
  right: 0;
`;

let Front = styled.div`
  width: ${(props) => props.deleverPercent || "0%"};
  height: 10px;
  background-color: ${(props) => props.color || "#e1dfdf"};
  position: absolute;
  top: 0;
  right: 0;
`;

let BoxIcon = styled.div`
  position: absolute;
  width: 35px;
  height: 35px;
  padding: 3px;
  top: -100%;
  background-color: #e1dfdf;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 20px;
    height: 20px;
    fill: white;
  }
`;

let BoxIconFirst = styled(BoxIcon)`
  ${(props) => (props.lang === "en" ? "left" : "right")}: -1%;
  background-color: ${(props) => props.color || "#e1dfdf"};
`;

let BoxIconSecond = styled(BoxIcon)`
  ${(props) => (props.lang === "en" ? "left" : "right")}: 30%;
  background-color: ${(props) => props.color || "#e1dfdf"};
`;

let BoxIconThird = styled(BoxIcon)`
  ${(props) => (props.lang === "en" ? "left" : "right")}: 60%;
  background-color: ${(props) => props.color || "#e1dfdf"};
`;

let BoxIconFourth = styled(BoxIcon)`
  ${(props) => (props.lang === "en" ? "left" : "right")}: 99%;
  background-color: ${(props) =>
    props.color === "green" ? "green" : "#e1dfdf"};
`;

let TrackDetails = styled.div`
  display: flex;
  gap: 20px;
`;

let TrackDetailsInfo = styled.div`
  flex: 2;
  table {
    border-collapse: collapse;
    width: 100%;
    margin-bottom: 20px;
    thead tr {
      font-size: 20px;
    }
    th {
      color: #212529;
      background: #eee;
    }
    th,
    td {
      padding: 0.25rem;
      text-align: left;
      border: 1px solid #ccc;
    }

    tbody {
      tr {
        flex-grow: 1;
        td {
          padding: 5px 50px;
          font-weight: bold;
        }
      }
    }
  }
`;

let TrackDetailsAddress = styled.div`
  flex: 1;
`;

let Address = styled.div`
  background-color: #f8f9fa;
  border: 1px solid #eee;
  border-radius: 8px;
  margin-bottom: 1rem;
  padding: 1rem;
`;

let Complain = styled.div`
  display: flex;
  gap: 50px;
  align-items: center;
  .text {
    color: #3e465d;
    font-weight: 700;
    margin: 0 0 1rem;
  }
  .phone {
    background-color: #ed3833;
    border-radius: 10px;
    color: #fff;
    display: block;
    font-weight: 600;
    padding: 0.4rem 1rem;
    text-align: center;
    text-decoration: none;
  }
  .img-container {
    width: 30%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
export default TrackPage;
