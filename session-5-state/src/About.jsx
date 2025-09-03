import React from 'react';

class About extends React.Component {
  state = {
    name: 'Shariq',
    salary: 500,
    flag: 0, // Initialize flag
  };

  // Define the function outside of the render method
  myFunction = () => {
    this.setState((prevState) => {
      // Toggle name and salary based on flag
      if (prevState.flag === 0) {
        return {
          name: 'Najam',
          salary: 1000,
          flag: 1, // Update flag
        };
      } else {
        return {
          name: 'Shariq',
          salary: 500,
          flag: 0, // Reset flag
        };
      }
    });
  };

  render() {
    return (
      <div>
        <h2>About Page</h2>
        <p>Name: {this.state.name}</p>
        <p>Salary: {this.state.salary}</p>
        <button onClick={this.myFunction}>Change</button>
      </div>
    );
  }
}

export default About;