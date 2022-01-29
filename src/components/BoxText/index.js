import React from "react";
import styled from "styled-components";
function BoxText({ head, img, text }) {
  return (
    <Box>
      <Head>
        <div>
          <img src={img} alt="" />
        </div>
        <h4>{head}</h4>
      </Head>

      <Text>
        <p>{text}</p>
      </Text>
    </Box>
  );
}

let Box = styled.div`
  max-width: 400px;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.3);
  padding: 20px;
  border-radius: 10px;
`;

let Head = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  h4 {
    font-size: 25px;
    color: red;
  }
  svg {
    fill: red;
  }
`;

let Text = styled.div`
  p {
    font-size: 18px;
  }
`;
export default BoxText;
