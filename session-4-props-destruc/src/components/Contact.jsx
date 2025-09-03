import React from "react";
const Contact = (props) => {
  return (
    <div>
        <h1>Contact Page</h1>
        <h3>{props.name}</h3>
        <h3>{props.email}</h3>
        <h3>{props.salary}</h3>
    </div>
  );
}

export default Contact;