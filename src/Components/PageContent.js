import React, { Component } from "react";
import { ThemeContext } from "../Contexts/ThemeContext";

export default class PageContent extends Component {
  static contextType = ThemeContext;
  render() {
    const { isDarkMode } = this.context;
    const styles = {
      backgroundColor: isDarkMode ? "darkblue" : "powderblue",
      width: "100vw",
      height: "100vh",
    };

    return <div style={styles}>{this.props.children}</div>;
  }
}
