import React from 'react';
class About extends React.Component {
  render() {
    return (
      <div>
        <h2>About Component</h2>
        <p>This is the About component of our React application.</p>
      </div>
    );
  }
}

class Gallery extends React.Component {
    render() {
        return (
        <div>
            <h2>Gallery Component</h2>
            <p>This is the Gallery component of our React Application.</p>
        </div>
        );
    }
    }

export {About, Gallery};