import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { createBrowserHistory } from "history";
import SearchForm from "components/ShipingForm/SearchForm";
import { useHistory } from "react-router-dom";
function Nav() {
  const { t, i18n } = useTranslation();
  let history = useHistory();

  const changedToLang = i18n.language === "ar" ? "en" : "ar";
  const currentDir = i18n.language === "ar" ? "rtl" : "ltr";
  let [openForm, setOpenForm] = useState(true);

  const oldRoute = window.location.pathname.includes(i18n.language)
    ? window.location.pathname.split("/").splice(2).join("/")
    : window.location.pathname;

  useEffect(() => {
    document.documentElement.dir = currentDir;
    document.documentElement.lang = i18n.language;
  }, [i18n.language, currentDir]);

  return (
    <NavContainer>
      <NavWrapper>
        <Logo>
          <Link to={`/${i18n.language}/`}>
            {i18n.language === "en" ? (
              <img src="/assets/bosta_logo_en_red.svg" alt="" />
            ) : (
              <img src="/assets/bosta-logo-ar-red.svg" alt="" />
            )}
          </Link>
        </Logo>
        <WrapperList>
          <NavList>
            <ul>
              <li>
                <Link to={`/${i18n.language}/`}>{t("nav.Home")}</Link>
              </li>
              <li>
                <Link to={`/${i18n.language}/pricing`}>{t("nav.Pricing")}</Link>
              </li>
              <li>
                <Link to={`/${i18n.language}/contact-sales`}>
                  {t("nav.Contact")}
                </Link>
              </li>
            </ul>
          </NavList>
          <WrapperTrakAndLang>
            <Track lang={i18n.language}>
              <div
                style={{ display: "flex", alignItems: "center" }}
                onClick={() => setOpenForm(!openForm)}
              >
                <span>{t("nav.Track")}</span>
                {openForm ? (
                  <Arrow>
                    <img src="/assets/more-svg-bottm.svg" alt="" />
                  </Arrow>
                ) : (
                  <Arrow>
                    <img src="/assets/more-svg-top.svg" alt="" />
                  </Arrow>
                )}
              </div>
              {openForm && (
                <SearchForm closeSearch={() => setOpenForm(!openForm)} />
              )}
            </Track>
            <SignIn>{t("nav.SignIn")}</SignIn>
            <Lang>
              <Link
                to="#"
                onClick={() => {
                  i18n.changeLanguage(changedToLang);
                  console.log(
                    window.location.pathname.split("/").splice(2).join("/")
                  );
                  history.push(
                    `/${changedToLang}/${window.location.pathname
                      .split("/")
                      .splice(2)
                      .join("/")}`
                  );
                }}
              >
                {" "}
                {i18n.language === "en" ? "عربي" : "ENG"}
              </Link>
            </Lang>
          </WrapperTrakAndLang>
        </WrapperList>
      </NavWrapper>
    </NavContainer>
  );
}

let Logo = styled.div`
  width: 153px;
  height: 50px;
`;

let NavContainer = styled.div`
  background-color: white;
  position: sticky;
  top: 0px;
  width: 100%;
  margin: 0;
  line-height: 50px;
`;

let Arrow = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  margin: 5px;
  img {
    width: 100%;
    height: 100%;
  }
`;

let NavWrapper = styled.nav`
  display: flex;
  height: 80px;
  margin: 0 auto;
  max-width: 1240px;
  align-items: center;
  font-size: 20px;
  a {
    text-decoration: none;
    color: black;
    &:active,
    &:focus {
      color: black;
    }
  }
`;

let NavList = styled.div`
  display: flex;
  align-items: center;

  ul {
    list-style: none;
    display: flex;
    gap: 50px;
    height: 100%;
    margin-top: 0;
    margin-bottom: 0;
    margin-inline-end: auto;
    margin-inline-start: 80px;

    li {
      /* padding: 30px 0; */
      position: relative;
      cursor: pointer;
      height: 100%;
      &:before {
        content: "";
        position: absolute;
        top: -15px;
        width: 100%;
        height: 4px;
        background-color: red;
        opacity: 0;
        transition: opacity 0.2s;
      }
      :hover:before {
        opacity: 1;
      }
    }
  }
`;

let WrapperList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

let WrapperTrakAndLang = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

let Track = styled.div`
  color: black;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: nowrap;
  margin-inline-end: 20px;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: -15px;
    width: 100%;
    height: 4px;
    background-color: red;
    opacity: 0;
    transition: opacity 0.2s;
  }
  :hover:before {
    opacity: 1;
  }

  &:after {
    content: "";
    position: absolute;
    left: ${(props) => (props.lang === "en" ? "110%" : "-13%")};
    width: 2px;
    height: 20px;
    background-color: #d7d6d6;
  }
`;

let SignIn = styled.div`
  color: black;

  margin-inline-end: 20px;
  padding-inline-start: 10px;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: -15px;
    width: 100%;
    height: 4px;
    background-color: red;
    opacity: 0;
    transition: opacity 0.2s;
  }
  :hover:before {
    opacity: 1;
  }
`;

let Lang = styled.div`
  color: red;
  a {
    font-weight: 700;
    color: inherit;
  }
`;

export default Nav;
