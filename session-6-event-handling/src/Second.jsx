import React from 'react';

// props destructure kar lo
function Second(props) {
  return (
    <div>
      Second
      {/* onClick ko FUNCTION do, call nahi */}
      <p>
        <button onClick={() => props.name("Shariq")}>Click Me</button>
      </p>
    </div>
  );
}

export default Second;
