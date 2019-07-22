import devListSprite from "../images/dev_list_sprite.svg";

const initialState = {
  button: "Get More Info",
  sprite: devListSprite,
  list: [
    {
      title: "Web Development",
      text:
        "Our tech stack includes the most progressive technologies which are excellent tools to build perfect web applications.",
      backgroundPosition: {
        desktop: "-15rem -56.2rem",
        mobile: "-11rem -39.9rem",
      },
      backgroundSize: {
        desktop: "55rem",
        mobile: "39rem",
      },
    },
    {
      title: "App Development",
      text:
        "We craft hybrid mobile applications that run on iOS, Android, Windows mobile platforms.",
      backgroundPosition: {
        desktop: "-20rem 0.8rem",
        mobile: "-18rem 0.8rem",
      },
      backgroundSize: {
        desktop: "85rem",
        mobile: "58rem",
      },
    },
    {
      title: "UI/UX Design",
      text:
        "Our design primary goal is user experience. We believe design should move with the times and integrate the latest techniques.",
      backgroundPosition: {
        desktop: "-15rem -22.7rem",
        mobile: "-13.55em -16rem",
      },
      backgroundSize: {
        desktop: "54.5rem",
        mobile: "38rem",
      },
    },
    {
      title: "Solutions for Startups",
      text:
        "Do you have a bold idea for your online product? Our highly skilled software development team will implement your visionary idea into reality.",
      backgroundPosition: {
        desktop: "-15rem -90.7rem",
        mobile: "-9.5rem -50.7rem",
      },
      backgroundSize: {
        desktop: "54.5rem",
        mobile: "31rem",
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
