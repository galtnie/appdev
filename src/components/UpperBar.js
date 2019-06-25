import React from "react";
import {
  UpperBarRoot,
  UpperBarWrapper,
  UpperBarToolbar,
  WidthContainer,
  UpperBarList,
  UpperBarItem,
  StyledLink,
} from "../styles";

export default function ButtonAppBar() {
  return (
    <UpperBarRoot>
      <UpperBarWrapper>
      <WidthContainer>
        <UpperBarToolbar>
          <span style={{ flexGrow: '2' }}>
            <StyledLink main exact to="/">
              AppDev
            </StyledLink>
          </span>
          <UpperBarList>
            <UpperBarItem>
              <StyledLink to="/services" activeClassName="selectedLink">
                <span>Services</span>
              </StyledLink>
            </UpperBarItem>
            <UpperBarItem>
              <StyledLink to="/technology" activeClassName="selectedLink">
                <span>Technologies</span>
              </StyledLink>
            </UpperBarItem>
            <UpperBarItem>
              <StyledLink to="/portfolio" activeClassName="selectedLink">
                <span> Portfolio </span>
              </StyledLink>
            </UpperBarItem>
            <UpperBarItem>
              <StyledLink to="/company" activeClassName="selectedLink">
                <span>Company</span>
              </StyledLink>
            </UpperBarItem>
            <UpperBarItem>
              <StyledLink to="/blog" activeClassName="selectedLink">
                <span>Blog</span>
              </StyledLink>
            </UpperBarItem>
            <UpperBarItem last>
              <StyledLink to="/contacts" activeClassName="selectedLink">
                Contact us
              </StyledLink>
            </UpperBarItem>
          </UpperBarList>
        </UpperBarToolbar>
        </WidthContainer>
      </UpperBarWrapper>
    </UpperBarRoot>
  );
}

