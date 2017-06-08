import React from "react";
import Header from "./header.jsx";
import Footer from "./footer.jsx";

export default class Body extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>{ this.props.children }</main>
        <Footer />
      </div>
    );
  }
}