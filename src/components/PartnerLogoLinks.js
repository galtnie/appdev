import React, { Fragment } from "react";
import { connect } from "react-redux";
import { PartnerLogoContainer, HomeSlideAppearContainer } from "../styles";
import { withWidth } from "@material-ui/core";

class PartnerLogoLinks extends React.Component {
  state = {
    container: null,
    slideIn: false,
  };

  refCallback = element => {
    if (element) {
      this.setState({ container: element });
    }
  };

  componentDidMount() {
    if (this.state.container) {
      window.addEventListener("scroll", () => {
        if (
          this.state.container.getBoundingClientRect().bottom <
          window.innerHeight
        ) {
          this.setState({ slideIn: true });
        } else if (
          this.state.container.getBoundingClientRect().bottom >
          window.innerHeight
        ) {
          this.setState({ slideIn: false });
        }
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.container !== this.state.container) {
      window.addEventListener("scroll", () => {
        if (
          this.state.container.getBoundingClientRect().bottom <
          window.innerHeight
        ) {
          this.setState({ slideIn: true });
        } else if (
          this.state.container.getBoundingClientRect().bottom >
          window.innerHeight
        ) {
          this.setState({ slideIn: false });
        }
      });
    }
  }

  render() {
    const { partnersLogos, width } = this.props;
    const smallDevice = width === "sm" || width === "xs";

    return (
      <Fragment>
        <div
          ref={this.refCallback}
          style={{
            width: "100%",
            height: smallDevice ? "auto" : "3rem",
            marginTop: smallDevice ? 0 : "2rem",
            marginBottom: smallDevice ? "4rem" : "10rem",
            display: "flex",
            flexDirection: smallDevice ? "column" : "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {partnersLogos.map((partner, index) => {
            let size;
            let position;
            switch (partner.name) {
              case "upwork":
                size = 9.5;
                position = "52% 87%";
                break;
              case "clutch":
                size = 7;
                position = "40% 50%";
                break;
              case "themanifest":
                size = 12;
                position = "50%";
                break;
              case "goodfirms":
                size = 8;
                position = "0.1rem 30%";
                break;
              case "youteam":
                size = 7;
                position = "47% 58%";
                break;
              default:
                size = 7;
                position = "50% 50%";
                break;
            }

            return (
              <HomeSlideAppearContainer
                smalldevice={Number(smallDevice)}
                trigger={this.state.slideIn}
                turn={index / 3}
                key={partner.name}
              >
                <PartnerLogoContainer
                  size={size}
                  image={partner.image}
                  position={position}
                  smalldevice={Number(smallDevice)}
                />
              </HomeSlideAppearContainer>
            );
          })}
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    partnersLogos: state.partnersLogos,
  };
};
export default connect(mapStateToProps)(withWidth()(PartnerLogoLinks));
