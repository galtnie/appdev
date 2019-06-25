import styled from "styled-components";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import { NavLink } from "react-router-dom";

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

export const WidthContainer = styled.div`
  width: 56.25rem;
  max-width: 56.25rem;
  padding: 0;
  margin: 0;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  fontweight: bold;
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

export const UpperBarRoot = styled.div`
  position: fixed;
  width: 100vw;
  min-width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 480px) {
    top: 0;
    z-index: 1;
    width: 100%;
  }
`;

export const UpperBarWrapper = styled(AppBar)`
  background-color: rgba(205, 204, 204, 0) !important;
  box-shadow: none !important;
  right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UpperBarToolbar = styled(Toolbar)`
         display: flex;
         flex-direction: row;
         align-items: center;
         justify-content: center;
         color: #fff;
         padding-left: 0 !important;
         padding-right: 0 !important;
         margin: 0;
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
`;

export const UpperBarItem = styled.li`
  list-style: none;
  margin-right: ${({ last }) => (last ? 0 : "2rem")};
  cursor: pointer;
`;

export const FirstPageContainer = styled.div`
  background-image: linear-gradient(
    to left top,
    #051937,
    #002c60,
    #003f8c,
    #0053bb,
    #1267eb
  );
  height: 100vh;
  max-height: 100vh;
  min-height: 100vh;
  width: 100vw;
  max-width: 100vw;
  min-width: 100vw;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
