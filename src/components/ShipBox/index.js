import React from "react";
import styled from "styled-components";

function ShipBox({ img, head, text }) {
  return (
    <Container>
      <ContainerImage>
        <img src={img} alt="" />
      </ContainerImage>
      <Text>
        <h3>{head}</h3>
        <p>{text}</p>
      </Text>
    </Container>
  );
}

let Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

let ContainerImage = styled.div`
  width: 150px;
  height: 150px;

  img {
    width: 100%;
    height: 100%;
  }
`;

let Text = styled.div`
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  h3 {
    font-size: 25px;
    color: red;
  }
  p {
    margin: 0 auto;
    margin-top: 20px;
    font-weight: bold;
    font-size: 13px;
    max-width: 200px;
  }
`;

export default ShipBox;
