import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createMuiTheme } from "@material-ui/core/styles";

import { ThemeProvider } from "@material-ui/styles";
import colors from "./defaults/colors.json";
import { LoginInfo } from "./contexts/LoginInfo";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.PRIMARY_RED,
    },
    secondary: {
      main: colors.PRIMARY_WHITE,
    },
    
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <LoginInfo>
        <App />
      </LoginInfo>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
