const initialState = [
  { name: "facebook", path: "/" },
  { name: "linkedin", path: "/" },
  { name: "github", path: "/" },
  { name: "behance", path: "/" },
  { name: "twitter", path: "/" },
  { name: "dribbble", path: "/" },
  { name: "medium", path: "/" },
];
export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
