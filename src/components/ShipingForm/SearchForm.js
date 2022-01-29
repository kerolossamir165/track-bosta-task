import React, { useEffect, useState, useRef, useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { DataContext } from "../../Context/DataContext";
function SearchForm(props) {
  let { t, i18n } = useTranslation();

  let [err, setError] = useState(null);
  let history = useHistory();
  let { setData } = useContext(DataContext);
  let onSubmit = (e) => {
    e.preventDefault();
    if (e.target.elements.track.value !== "") {
      fetch(
        `https://tracking.bosta.co/shipments/track/${e.target.elements.track.value}`
      )
        .then((res) => res.json())
        .then((data) => {
          props.closeSearch();
          setData(data);
          history.push({
            pathname: `/${i18n.language}/tracking-shipment/${e.target.elements.track.value}`,
          });
        })
        .catch((err) => setError(err.message));
    }
  };

  return (
    <FormWrapper lang={i18n.language}>
      <FormHeading>{t("ship.trackShip")}</FormHeading>
      <FormLable>{t("ship.textNo")}</FormLable>
      <form action="" onSubmit={onSubmit}>
        <FormInputWrapper>
          <FormInput
            name="track"
            placeholder={t("ship.noShip")}
            type="text"
            id="ship"
            autocomplete="off"
          />
          <SeatchIcon type="submit">
            <AiOutlineSearch />
          </SeatchIcon>
        </FormInputWrapper>
      </form>
    </FormWrapper>
  );
}

let FormWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: ${(props) => (props.lang === "en" ? "-50%" : "-150%")};
  border: 1px solid #d5d0d0;
  border-radius: 5px;
  padding: 20px;
  background-color: #fafafa;
  line-height: 1.5;
  z-index: 9999;
`;
let FormHeading = styled.h3`
  margin-bottom: 5px;
  color: red;
`;

let FormLable = styled.p`
  font-size: 16px;
  margin-top: 5px;
`;
let FormInputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

let FormInput = styled.input`
  border-radius: 10px;
  border: 1px solid #d5d0d0;
  margin-inline-end: 8px;

  &::placeholder {
    font-size: 15px;
    font-weight: 300;
    padding-inline-start: 5px;
  }

  &::focus {
    border: 1px solid;
  }
`;

let SeatchIcon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  border-radius: 50px;
  border: none;
  padding: 5px;
  svg {
    fill: #fff;
  }
`;

export default SearchForm;
