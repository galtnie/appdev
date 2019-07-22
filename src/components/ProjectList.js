import React, { Fragment } from "react";
import { connect } from "react-redux";
import {
  HomeSecondContainerInnerGrid,
  HomeSecondContainerImageDiv,
} from "../styles";
import { Grid, withWidth } from "@material-ui/core";
import { renderEmptyColumns } from "../functions";
import AnimatedSideText from "./AnimatedSideText.js";
import StylesSwitcherWhenContainerViewed from "./StylesSwitcherWhenContainerViewed";
import StylesSwitcherWhenScreenTopReached from "./StylesSwitcherWhenScreenTopReached";

class ProjectList extends React.Component {
  renderServiceList = () => {
    const {
      width,
      projectList,
      onScrollStyles,
      previousComponent,
    } = this.props;
    const smallDevice = width === "sm" || width === "xs";
    const list = [];

    projectList.list.forEach((item, index) => {
      const layer = [];
      const key0 = index + "switcher";
      const key1 = index + "afore";
      const key2 = index + "after";

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
              backgroundImage: `url(${
                smallDevice
                  ? projectList.sprite.mobile
                  : projectList.sprite.desktop
              })`,
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
            title={item.title}
            button={projectList.button}
            smallDevice={smallDevice}
          >
            {item.text}
          </AnimatedSideText>
        </HomeSecondContainerInnerGrid>
      );
      const stylesSwitcher = smallDevice ? (
        <StylesSwitcherWhenScreenTopReached
          key={key0}
          switchOn={onScrollStyles.projectList[index]}
          switchOff={
            index === 0
              ? onScrollStyles[previousComponent]
              : onScrollStyles.projectList[index - 1]
          }
        />
      ) : (
        <StylesSwitcherWhenContainerViewed
          key={key0}
          below={
            index === 0
              ? onScrollStyles[previousComponent]
              : onScrollStyles.projectList[index - 1]
          }
          seen={onScrollStyles.projectList[index]}
          above={
            onScrollStyles.projectList.length === index + 1
              ? onScrollStyles.projectList[index]
              : onScrollStyles.projectList[index + 1]
          }
          height={smallDevice ? "1px" : "10rem"}
        />
      );

      layer.push(stylesSwitcher);
      layer.push(renderEmptyColumns(1, key1));
      if (smallDevice) {
        layer.push(image);
        layer.push(description);
      } else {
        layer.push(index % 2 === 0 ? image : description);
        layer.push(index % 2 === 0 ? description : image);
      }
      layer.push(renderEmptyColumns(1, key2));

      list.push(
        smallDevice ? (
          <Grid
            key={index}
            container
            justify="center"
            alignItems="center"
            style={{
              background: onScrollStyles.projectList[index].backgroundColor,
            }}
          >
            {layer}
          </Grid>
        ) : (
          layer
        )
      );
    });
    return list;
  };

  render() {
    return <Fragment>{this.renderServiceList()}</Fragment>;
  }
}

const mapStateToProps = state => {
  return {
    projectList: state.projectList,
    onScrollStyles: state.onScrollStyles,
  };
};
export default connect(mapStateToProps)(withWidth()(ProjectList));
