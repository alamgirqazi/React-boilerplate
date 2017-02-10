var React = require("react");

var Main = (props) =>
{
  return (
     <div>
      <div className="row">

      <div className="columns medium-6 large-4 small-centered">
   {props.children}  
      
      <p>main component</p>
      </div>

      </div>

      </div>
  )};

module.exports = Main;
