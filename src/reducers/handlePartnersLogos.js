import clutch from "../images/clutch.svg";
import upwork from "../images/upwork.png";
import goodfirms from "../images/goodfirms.png";
import themanifest from "../images/themanifest.png";
import youteam from "../images/youteam.png";

const initialState = [
  { name: "clutch", path: "/", image: clutch },
  { name: "upwork", path: "/", image: upwork },
  { name: "goodfirms", path: "/", image: goodfirms },
  { name: "themanifest", path: "/", image: themanifest },
  { name: "youteam", path: "/", image: youteam },
];
export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
