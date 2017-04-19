var React = require("react");
var Link = require("react-router").Link;

var Header = React.createClass({
  handleLogout: function(e){
    e.preventDefault();
    axios.post("/logout").then(function(data){
      location.href = "/login";
    });
  },
  render: function(){
    return (
      <header>header</header>
    )
  }
});

module.exports = Header;
