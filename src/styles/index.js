import styled from "styled-components";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import { Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";

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
  flex-grow: 1;
`;

export const UpperBarWrapper = styled(AppBar)`
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const UpperBarToolbar = styled(Toolbar)`
  display: flex;
  flex-direction: row;
  alignitems: center;
  width: 56.25rem;
  maxwidth: 56.25rem;
`;

export const UpperBarTypography = styled(Typography)`
  flex-grow: 1;
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
