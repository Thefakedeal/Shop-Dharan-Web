import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createMuiTheme } from "@material-ui/core/styles";

import { ThemeProvider } from "@material-ui/styles";
import COLORS from "./defaults/colors.json";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: COLORS.PRIMARY_RED,
    },
    secondary: {
      main: COLORS.PRIMARY_WHITE,
    },
    grey: {
      main: COLORS.PRIMARY_DARK,
    },
  },
  
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
