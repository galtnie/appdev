import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React from "react";

export const StyledMain = styled.main`
  max-width: 100vw;
  padding: 0;
  margin: 0;
`;

export const MainPageDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  max-width: 100vw;
  padding: 0;
  margin: 0;
`;

//  UpperBar component & UpperBarBurgerMenu Component

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  padding-bottom: 0.1rem;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &.selectedLink {
    border-bottom: 0.1em solid white;
  }
`;

export const UpperBarList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  opacity: 1;
  -webkit-animation: none;
  animation: none;
  visibility: visible;
  fontweight: bold;
  margin: 0;
  padding: 0;
`;

export const UpperBarItem = styled.li`
  list-style: none;
  margin-right: ${({ last }) => (last ? 0 : "1rem")};
  cursor: pointer;
  @media (max-width: 650px) {
    margin-right: ${({ last }) => (last ? 0 : "0.5rem")};
  }
`;

export const BurgerButtonContainer = styled.div`
  opacity: 0.9;
  display: flex;
  alignitems: center;
  background: inherit;
  color: inherit;
`;

export const BurgerMenuItemContainer = styled.div`
  opacity: 0;
  animation: 1s appear forwards;
  animation-delay: ${({ delay }) => delay};
`;

export const BurgerMenuItem = styled.div`
  font-family: inherit;
  font-size: 1.2rem;

  color: inherit;
  transition: color 0.2s ease-in-out;
  animation: 0.5s slideIn forwards;
  animation-delay: ${({ delay }) => delay};
  &:hover {
    color: #f2b880;
  }
`;

export const BurgerMenuList = styled.div`
  height: 91vh;
  width: 100vw;
  background: rgba(103, 58, 183, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Montserrat, Helvetica, sans-serif;
  box-sizing: border-box;
  padding-bottom: 5em;
`;
// height - if i use 'Slide' component, this width: "calc(100vh - 100%)" is more accurate. but collapse considers 100% height of this container, not of the parent one
// background: rgba(103, 58, 183, 0.7);  - maybe make it a secondary color. need to mull over it later.

export const BurgerMenuContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;

  height: ${({ opened }) => (opened ? "100%" : 0)};
  width: 100vw;
  color: #fafafa;
  transition: height 0.3s ease;
`;

export const BurgerButtonLinesWrapper = styled.div`
  height: 32px;
  width: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 4px;
  z-index: 15;
`;

export const BurgerLine = styled.div`
  height: 2px;
  width: 20px;
  background: ${({ color }) => color};
  transition: "all 0.3s ease";
`;

export const BurgerLineTop = ({ open, color }) => {
  return (
    <BurgerLine
      color={color}
      style={{
        transform: open ? "rotate(45deg)" : "none",
        transformOrigin: "top left",
        marginBottom: "5px",
      }}
    />
  );
};

export const BurgerLineMiddle = ({ open, color }) => {
  return (
    <BurgerLine
      color={color}
      style={{
        opacity: open ? 0 : 1,
        transform: open ? "translateX(-16px)" : "none",
        transition: "all 0.3s ease",
      }}
    />
  );
};

export const BurgerLineBottom = ({ open, color }) => {
  return (
    <BurgerLine
      color={color}
      style={{
        transform: open ? "translateX(-1px) rotate(-45deg)" : "none",
        transformOrigin: "top left",
        marginTop: "5px",
        transition: "all 0.3s ease",
      }}
    />
  );
};

export const BurgerStyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

// something else
// something else
// something else
// something else
// something else
// something else
// something else

export const FirstColorfulContainer = styled.div`
  background-image: linear-gradient(
    to left top,
    #051937,
    #002c60,
    #003f8c,
    #0053bb,
    #1267eb
  );
  height: 100vh;
  max-height: 200vh;
  height: 100vh;
  min-height: 100vh;
  width: 100vw;
  max-width: 100%;
  min-width: 100%;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// export const ContactFormWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   margin-top: 5rem;
//   margin-bottom: 5rem;
// `;

export const ContactFormForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const ContactFormControl = styled(FormControl)`
  margin-top: 1rem !important;
  width: 100%;
`;
// min-width: 40% !important;

export const ContactFormTextField = styled(TextField)`
  margin-top: 1rem !important;
  width: 100%;
`;

export const ContactFormButton = styled(Button)`
  margin: 2rem !important;
  color: white !important;
  border-color: 1px solid transparent !important;
  border-radius: 0.5rem !important;
  font-weight: bold !important;
  background-image: linear-gradient(
    to left top,
    #051937,
    #002c60,
    #003f8c,
    #0053bb,
    #1267eb
  );
  &:hover {
    background-image: none;
    color: #3f51b5 !important;
    border: 1px solid rgba(63, 81, 181, 0.5) !important;
  }
`;

export const TechsUsedContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
`;

export const TechsUsedParagraph = styled.p`
  font-color: grey;
`;

export const TechsUsedList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
`;

export const TechsUsedListItem = styled.li`
  width: 15rem;
  height: 11rem;
  list-style: none;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  box-shadow: 0 2rem 2rem 0 rgba(0, 0, 0, 0.05),
    0 1rem 1.5rem 0 rgba(0, 0, 0, 0.05);
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TechsUsedImageContainer = styled.div`
  height: 7rem;
  width: 15rem;
  background-image: ${({ logo }) => `url(${logo})`};
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-position: center;
`;
