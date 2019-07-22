import styled, { keyframes } from "styled-components";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { FormControl, TextField, Button, Grid } from "@material-ui/core";
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

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: ${props => (props.footer ? "grey" : "white")};
  padding-bottom: 0.1rem;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  &.selectedLink {
    border-bottom: ${props => (props.footer ? "none" : "0.1em solid white")};
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
  background: ${({ background }) =>
    background !== "transparent" ? background : "rgba(103, 58, 183, 0.7)"};
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

export const FirstColorfulContainer = styled.div`
  background-image: linear-gradient(to left top, #673ab7, #3d5afe);
  height: 100vh;
  max-height: 200vh;
  height: 100vh;
  min-height: 100vh;
  width: 100vw;
  max-width: 100%;
  min-width: 100%;
  color: #fff;
`;

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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
`;

export const TechsUsedParagraph = styled.p`
  font-color: grey;
`;

export const TechsUsedList = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  height: 26rem;
  width: 100%;
`;

export const TechsUsedListItem = styled.div`
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

export const FooterExternalLinksContainer = styled.div`
  width: ${({ smalldevice }) => (smalldevice ? "100%" : "auto")};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ smalldevice }) =>
    smalldevice ? "space-between" : "center"};
  margin-top: ${({ smalldevice }) => (smalldevice ? "2rem" : "1%")};
`;

export const FooterExternalLinkWrapper = styled.div`
  margin-top: 2%;
  margin-right: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.8rem;
  height: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: margin-top 0.2s;
  &:hover {
    margin-top: 0%;
  }
`;

export const FooterColumnLink = styled(Link)`
  text-decoration: none;
  color: grey;
  &:active: {
    text-decoration: none;
  }
  &:focus: {
    text-decoration: none;
  }
  &:link: {
    text-decoration: none;
  }
  &:visited: {
    text-decoration: none;
  }
  &:hover: {
    text-decoration: none;
  }
`;

export const FooterImageWrapper = styled.div`
  width: 2rem;
  height: 2rem;
  display: flex;
  background-color: grey;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
`;

const animateArrow = keyframes`
0% {
    stroke-dashoffset: 100;
    transform: translate(0, 0);
    opacity: 1;
    transform: translate(0, 0);
  }
  20% {
    stroke-dashoffset: 0;
  }
  40% {
    stroke-dashoffset: 0;
    transform: translate(0, 15%);
    opacity: 1;
  }
  80% {
     stroke-dashoffset: 0;
    transform: translate(0, 30%);
    opacity: 1;
  }
  100% {
     stroke-dashoffset: 0;
    transform: translate(0, 30%);
    opacity: 0;
  }
`;

export const AnimatedPolyline = styled.polyline`
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  fill: none;
  stroke: rgba(255, 255, 255, 0.5);
  stroke-width: 2;
  animation-name: ${animateArrow};
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  margin-top: 2rem;
`;

const appearScrollDiv = keyframes`
   0% { opacity: 0; }
    40% { opacity: 0; }
     80% {opacity: 1;}
    100% {opacity: 0;}
`;

export const AnimatedScrollDiv = styled.div`
  animation-name: ${appearScrollDiv};

  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-fill-mode: backwards;
`;

export const HomeColorfulContainerImage = styled.img`
  position: ${({ smallDevice }) => (smallDevice ? "static" : "absolute")};
  width: 100%;
  top: ${({ smallDevice }) => (smallDevice ? 0 : "5rem")};
`;

export const HomeColorfulContainerBottom = styled.div`
  position: absolute;
  width: 20%;
  height: 15%;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HomeSecondContainer = styled.div`
  width: 100%;

  z-index: ${({ smalldevice }) => (smalldevice ? 1 : 3)};
  margin-top: ${({ smalldevice }) => (smalldevice ? 0 : "100vh")};
  margin-bottom: ${({ smalldevice }) => (smalldevice ? 0 : "100vh")};
  position: ${({ smalldevice }) => (smalldevice ? "static" : "absolute")};
  display: flex;
  flex-direction: column;
`;

export const HomeSecondContainerInnerGrid = styled(Grid)`
  height: ${({ smalldevice, text }) =>
    smalldevice ? (text ? "auto" : "30rem") : "33rem"};
  margin-bottom: 2rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: ${({ smalldevice, side }) =>
    smalldevice ? 0 : side === "left" ? "5rem" : 0};
  padding-right: ${({ smalldevice, side }) =>
    smalldevice ? 0 : side === "right" ? "5rem" : 0};
`;

// export const HomeSecondContainerInnerGridLeft = styled(
//   HomeSecondContainerInnerGrid
// )`
//   padding-left: ${({ smalldevice }) => (smalldevice ? 0 : "5rem")};
// `;

// export const HomeSecondContainerInnerGridRight = styled(
//   HomeSecondContainerInnerGrid
// )`
//   padding-right: ${({ smalldevice }) => (smalldevice ? 0 : "5rem")};
// `;

const slideIn = keyframes`
   0% { opacity: 0; 
     margin-top: 10rem;

}
    100% {opacity: 1; 
   margin-top: 0rem;    

  }
`;
const slideOut = keyframes`
   0% { opacity: 1; 
margin-top: 0rem;

}
    100% {opacity: 0; 
 margin-top: 10rem;

  }
`;

export const HomeSlideAppearContainer = styled.div`
  animation-delay: ${({ turn }) => (turn ? turn * 0.4 : 0)}s;
  animation-name: ${({ smalldevice, trigger }) =>
    smalldevice ? "none" : trigger ? slideIn : slideOut};
  animation-duration: 0.4s;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  opacity: ${({ smalldevice }) => (smalldevice ? 1 : 0)};
  margin-top: ${({ smalldevice }) => (smalldevice ? 0 : "10rem")};
`;

export const HomeSecondContainerImageDiv = styled.div`
  width: ${({ smalldevice }) => (smalldevice ? "100%" : "35rem")};
  height: ${({ smalldevice }) => (smalldevice ? "23rem" : "35rem")};
  background-repeat: no-repeat;
`;

export const CenteredGrid = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: ${({ smalldevice }) => (smalldevice ? "center" : "flex-start")};
  flew-wrap: wrap;
  align-content: ${({ smalldevice }) =>
    smalldevice ? "center" : "flex-start"};
  height: ${({ height }) => height};
`;

export const PartnerLogoContainer = styled.div`
  height: 6rem;
  width: 8rem;
  background-image: url(${({ image }) => image});
  background-size: ${({ size }) => size}rem;
  background-position: ${({ position }) => position};
  background-repeat: no-repeat;
  overflow: hidden;
  cursor: pointer;
  margin: ${({ smalldevice }) => (smalldevice ? 0 : "1rem")};
`;

export const HomeThirdContainer = styled.div`
  width: 100%;
  height: ${({ smalldevice }) => (smalldevice ? "auto" : "100vh")};
  background-color: white;
  padding-bottom: ${({ smalldevice }) => (smalldevice ? "5rem" : 0)};
`;

export const SideTextButton = styled(Button)`
  margin-top: 1rem !important;
  background-color: transparent !important;
  box-shadow: none !important;
  text-transform: none !important;
  padding-left: 2rem !important;
  padding-right: 2rem !important;
`;

export const SideTextButtonWithChangedStyles = styled(SideTextButton)`
  color: white !important;
  border: 2px solid white  !important;
 border-radius: 0.5rem  !important;

  &:hover {
    color: ${({ navbarcolor }) => navbarcolor}  !important;
    background-color: white  !important;
    },
`;
