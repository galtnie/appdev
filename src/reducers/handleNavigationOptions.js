const initialState = [
  [
    "Services",
    "Web Development",
    "Mobile Development",
    "UI/UX Design",
    "Solutions for Startups",
  ],
  [
    "Technologies",
    "Angular",
    "React",
    "Ngx-restangular",
    "Ionic",
    "Firebase",
    "Node.js",
  ],
  ["Portfolio", "Music App", "E-commerce SAAS", "Education Platform"],
  "Company",
  "Blog",
  "Contact us",
];

// const initialState = [
//   "Services",
//   "Technologies",
//   "Portfolio",
//   "Company",
//   "Blog",
//   "Contact us",
// ];

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
