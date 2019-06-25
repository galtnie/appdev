const initialState = [
  {
    name: "Angular",
    logo: "https://angular.io/assets/images/logos/angular/angular.png",
    // logo: '../images/angular.png'
  },
  {
    name: "Vue",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png",
    // logo: '../images/vue.png'
  },
  {
    name: "React",
    logo:
      "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png",
    // logo: '../images/react.png'
  },
  {
    name: "Next.JS",
    logo:
      "https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png",
    // logo: '../images/next.png'
  },
  {
    name: "Node.JS",
    logo:
      "http://pluspng.com/img-png/nodejs-logo-png-nice-images-collection-node-js-desktop-wallpapers-370.png",
    // logo: '../images/node.png'
  },
  {
    name: "Nuxt",
    logo:
      "https://cdn.cosmicjs.com/8a9bd6e0-471e-11e8-9273-6f3edf3e559e-nuxt.png",
    // logo: '../images/nuxt.png'
  },
];

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
