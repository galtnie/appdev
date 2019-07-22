import desktopMediaSprite from "../images/media_sprite_desktop.png";
import mobileMediaSprite from "../images/media_sprite_mobile.png";

const initialState = {
  button: "View More",
  sprite: {
    desktop: desktopMediaSprite,
    mobile: mobileMediaSprite,
  },
  list: [
    {
      title: "MUSIC APP",
      text:
        "Uber-style service for DJs, musicians and people who enjoy music. Online catalog, streaming service and booking app.",
      backgroundPosition: {
        desktop: "-54.3rem 0rem",
        mobile: "-0.3rem 1rem",
      },
      backgroundSize: {
        desktop: "91rem",
        mobile: "43rem",
      },
    },
    {
      title: "E-COMMERCE SAAS",
      text:
        "A platform for building social marketplace. Helps to convert social network followers into real sales and has build-in features of product discovery, placing orders and tracking statuses.",
      backgroundPosition: {
        desktop: "0rem 8.1rem",
        mobile: "-17.3rem 4rem",
      },
      backgroundSize: {
        desktop: "59rem",
        mobile: "36rem",
      },
    },
    {
      title: "EDUCATION PLATFORM",
      text:
        "An integrated solution for building online courses and getting unique audience. Simple solution for tutors and students to start training and learning.",
      backgroundPosition: {
        desktop: "0rem -28rem",
        mobile: "0.45rem -26rem",
      },
      backgroundSize: {
        desktop: "68rem",
        mobile: "50rem",
      },
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
