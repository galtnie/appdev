const initialState = {
  initial: {
    navbarColor: "rgba(103, 58, 183, 0.7)",
    backgroundColor: "white",
    fontColor: "black",
  },
  serviceList: {
    navbarColor: "rgba(0, 0, 0, 0.6)",
    backgroundColor: "white",
    fontColor: "black",
  },
  projectList: [
    {
      navbarColor: "rgba(139, 0, 139, 0.6)",
      backgroundColor: "linear-gradient(134deg,#6c186e 0,#ce2ef9 100%)",
      fontColor: "white",
    },
    {
      navbarColor: "rgba(119,136,153,0.6)",
      backgroundColor: "linear-gradient(-45deg,#aab0b6 0,#868e97 100%)",
      fontColor: "white",
    },
    {
      navbarColor: "rgba(0,0,255, 0.6)",
      backgroundColor:
        "linear-gradient(244.2deg,#571bf1 28.61%,#9a50ce 125.46%)",
      fontColor: "white",
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
