import React from "react";
import { connect } from "react-redux";
import { Typography } from "@material-ui/core/";
import { StyledLink } from "../styles";

class Logo extends React.Component {
  render() {
    const { logo, footer } = this.props;
    return (
      <StyledLink footer={footer ? 1 : 0} main="true" exact to="/">
        <Typography
          variant="h5"
          style={
            footer
              ? {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }
              : null
          }
        >
          {logo}
        </Typography>
      </StyledLink>
    );
  }
}

const mapStateToProps = state => {
  return { logo: state.logo };
};

export default connect(mapStateToProps)(Logo);
