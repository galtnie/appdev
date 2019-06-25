import angular from "../images/angular.png";
import vue from "../images/vue.png";
import react from "../images/react.png";
import next from "../images/next.png";
import node from "../images/node.png";
import nuxt from "../images/nuxt.png";

const initialState = [
  {
    name: "Angular",
    logo: angular,
  },
  {
    name: "Vue",
    logo: vue,
  },
  {
    name: "React",
    logo: react,
  },
  {
    name: "Next.JS",
    logo: next,
  },
  {
    name: "Node.JS",
    logo: node,
  },
  {
    name: "Nuxt",
    logo: nuxt,
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
