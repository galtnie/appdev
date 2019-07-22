import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import {
  MuiThemeProvider,
  createMuiTheme,
  CssBaseline,
} from "@material-ui/core";
import { indigo, deepPurple } from "@material-ui/core/colors";
import "font-awesome/css/font-awesome.min.css";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple[500],
      // main: indigo[500],
    },
    secondary: {
      main: indigo[500],
      // main: blue[500],
    },
  },
  "@global": {
    "html, body, #root": {
      width: "100%",
    },
  },
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
