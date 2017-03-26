var React = require("react");

var Header = require("./header.jsx");
var Footer = require("./footer.jsx");

var Body = React.createClass({
  render: function () {
    return (
      <div>
        <Header />
        <main>{ this.props.children }</main>
        <Footer />
      </div>
    )
  }
});

module.exports = Body;
