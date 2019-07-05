import React from "react";
import { connect } from "react-redux";
import { Typography } from "@material-ui/core/";
import { StyledLink } from "../styles";

class Logo extends React.Component {
  render() {
    const { logo, footer } = this.props;
    return (
      <Typography variant="h6">
        <StyledLink footer={footer ? 1 : 0} main="true" exact to="/">
          {logo}
        </StyledLink>
      </Typography>
    );
  }
}

const mapStateToProps = state => {
  return { logo: state.logo };
};

export default connect(mapStateToProps)(Logo);
