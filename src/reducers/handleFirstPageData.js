import desktopImg from "../images/first_main_desktop.svg";
import mobileImg from "../images/first_main_mobile.svg";

const initialState = {
  home: {
    text: "Let us build an app for you while you are enjoying the coffee.",
    button: "Start building apps",
    desktopImg,
    mobileImg,
  },
  services: {
    title: "COMPLETE SERVICE PACKAGE",
    text:
      "We offer web and hybrid application development service along with the full pack of supporting services. Quality assurance, project management and UI/UX design are fully integrated into our workflow to create successful products.",
  },
  technologies: {
    title: "FRESH IDEAS AND TECHNICAL INNOVATIONS IN APPLICATION DEVELOPMENT",
    text:
      "Advanced and cutting edge technologies for developing web and mobile applications, allow you to implement quality products on time",
  },
  portfolio: {
    title: "OUR PROJECTS",
    text:
      "The applications we created ride the wave of modern trends in web services and utilize components required by any business that wants to take the advantages of global web market.",
  },
  company: {
    title: "WE REALIZE YOUR IDEAS",
    text:
      "That’s not the secret, the project fully depends on the team who works on it. 2muchcoffee is obsessed with Angular here. We develop custom solutions for niche target enterprises and help your business to expand.",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
