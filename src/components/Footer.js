import React, { Fragment } from "react";
import { connect } from "react-redux";
import { Grid, withWidth, withStyles, Typography } from "@material-ui/core";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import {
  FooterExternalLinksContainer,
  FooterExternalLinkWrapper,
  FooterImageWrapper,
} from "../styles";

const classes = {
  upperLine: {
    marginTop: "2rem",
    borderTop: "1px solid grey",
  },
  columnLink: {
    textDecoration: "none",
    color: "grey",
    "&:visited": {
      textDecoration: "none",
    },
    "&:hover": {
      textDecoration: "none",
    },
  },
  companyInfo: {
    marginTop: "1rem",
    cursor: "default",
    color: "grey",
  },
  columnFirtItem: {
    marginTop: "0.7rem",
    marginBottom: "1rem",
    textDecoration: "none",
  },
  columnItem: {
    textDecoration: "none",
  },
  externalPaths: {
    background: "none",
  },
  externalLinkImage: {
    color: "white",
    backgroundColor: "grey",
    borderRadius: "50%",
  },
  githubImage: {
    color: "white",
    backgroundColor: "grey",
    borderRadius: "50%",
  },
};

const FooterExternalLinks = withStyles(classes)(({ children, classes }) => {
  return (
    <FooterExternalLinksContainer>
      {children.map(ref => {
        return (
          <FooterExternalLinkWrapper key={ref.name}>
            {ref.name !== "github" ? (
              <Link className={classes.columnLink} to={ref.path}>
                <FooterImageWrapper>
                  <i
                    className={`${classes.externalLinkImage} fa fa-${
                      ref.name
                    } fa-1x`}
                    aria-hidden="true"
                  />
                </FooterImageWrapper>
              </Link>
            ) : (
              <Link className={classes.columnLink} to={ref.path}>
                <FooterImageWrapper>
                  <i
                    className={`${classes.githubImage} fa fa-github fa-2x`}
                    aria-hidden="true"
                  />
                </FooterImageWrapper>
              </Link>
            )}
          </FooterExternalLinkWrapper>
        );
      })}
    </FooterExternalLinksContainer>
  );
});

class Footer extends React.Component {
  renderLogo() {
    const { classes } = this.props;
    return (
      <Grid item md={3} sm={5} xs={10}>
        <Logo footer />
        <Typography variant="body2" className={classes.companyInfo}>
          Full-Stack web and mobile app development and design company.
        </Typography>
      </Grid>
    );
  }

  renderInternalLink = columnHeader => {
    const { navigationOptions, classes } = this.props;
    const column = [];
    let list = navigationOptions.find(element => element[0] === columnHeader);
    list.forEach((item, index) => {
      index === 0
        ? column.push(
            <Link className={classes.columnLink} to={`/`} key={index}>
              <Typography
                variant="subtitle2"
                className={classes.columnFirtItem}
                paragraph
              >
                {item}
              </Typography>
            </Link>
          )
        : column.push(
            <Link className={classes.columnLink} to={`/`} key={index}>
              <Typography variant="body2">
                {typeof item === "string" ? item : item.name}
              </Typography>
            </Link>
          );
    });
    return (
      <Grid item md={1} sm={2} xs={10} key={columnHeader}>
        {column}
      </Grid>
    );
  };

  renderInternalLinks() {
    const { width } = this.props;
    const links = [];
    links.push(this.renderInternalLink("Services"));
    links.push(this.renderInternalLink("Technologies"));
    links.push(this.renderInternalLink("Portfolio"));
    links.push(this.renderInternalLink("Contact us"));
    return width !== "xs" ? (
      links
    ) : (
      <div style={{ marginTop: "5%" }}>{links}</div>
    );
  }

  renderExternalLinks() {
    const { externalLinks } = this.props;
    return (
      <Grid item md={3} sm={5} xs={10}>
        <FooterExternalLinks>{externalLinks}</FooterExternalLinks>
      </Grid>
    );
  }

  render() {
    const { classes, width } = this.props;
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        style={{ color: "grey !important" }}
      >
        <Grid item xs={1} />
        <Grid item xs={10} className={classes.upperLine} />
        <Grid item xs={1} />

        {width === "sm" || width === "xs" ? (
          <Fragment>
            <Grid item xs={1} />
            {this.renderLogo()}
            {this.renderExternalLinks()}
            <Grid item xs={1} />
            {this.renderInternalLinks()}
          </Fragment>
        ) : (
          <Fragment>
            {this.renderLogo()}
            {this.renderInternalLinks()}
            {this.renderExternalLinks()}
          </Fragment>
        )}
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    navigationOptions: state.navigationOptions,
    externalLinks: state.externalLinks,
  };
};
export default connect(mapStateToProps)(
  withWidth()(withStyles(classes)(Footer))
);
