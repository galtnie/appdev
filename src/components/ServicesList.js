import React, { Fragment } from "react";
import { connect } from "react-redux";
import {
  HomeSecondContainerInnerGrid,
  HomeSecondContainerImageDiv,
} from "../styles";
import { withWidth } from "@material-ui/core";
import { renderEmptyColumns } from "../functions";
import AnimatedSideText from "./AnimatedSideText.js";

class ServicesList extends React.Component {
  renderServiceList = () => {
    const { width, serviceList } = this.props;
    const smallDevice = width === "sm" || width === "xs";
    const list = [];

    serviceList.list.forEach((item, index) => {
      const image = (
        <HomeSecondContainerInnerGrid
          key={index + "image"}
          item
          md={5}
          xs={10}
          smalldevice={Number(smallDevice)}
        >
          <HomeSecondContainerImageDiv
            smalldevice={Number(smallDevice)}
            style={{
              backgroundImage: `url(${serviceList.sprite})`,
              backgroundPosition: smallDevice
                ? item.backgroundPosition.mobile
                : item.backgroundPosition.desktop,
              backgroundSize: smallDevice
                ? item.backgroundSize.mobile
                : item.backgroundSize.desktop,
            }}
          />
        </HomeSecondContainerInnerGrid>
      );

      const description = (
        <HomeSecondContainerInnerGrid
          item
          md={5}
          xs={10}
          smalldevice={Number(smallDevice)}
          text={1}
          side={index % 2 === 0 ? "right" : "left"}
          key={index + "description"}
        >
          <AnimatedSideText
            serviceList={true}
            title={item.title}
            button={serviceList.button}
            smallDevice={smallDevice}
          >
            {item.text}
          </AnimatedSideText>
        </HomeSecondContainerInnerGrid>
      );

      const key1 = index + "afore";
      const key2 = index + "after";
      list.push(renderEmptyColumns(1, key1));
      if (smallDevice) {
        list.push(image);
        list.push(description);
      } else {
        list.push(index % 2 === 0 ? image : description);
        list.push(index % 2 === 0 ? description : image);
      }

      list.push(renderEmptyColumns(1, key2));
    });
    return list;
  };

  render() {
    return <Fragment>{this.renderServiceList()}</Fragment>;
  }
}

const mapStateToProps = state => {
  return {
    serviceList: state.serviceList,
  };
};
export default connect(mapStateToProps)(withWidth()(ServicesList));
