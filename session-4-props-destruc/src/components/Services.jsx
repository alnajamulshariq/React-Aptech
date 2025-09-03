import React from "react";
class Services extends React.Component {
  render() {
    return (
      <div>
        <h2>Our Services</h2>
        {/* props in class component */}
        <p>{this.props.servName}</p>
      </div>
    );
  }
}

export { Services };