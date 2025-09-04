// import Admin from "./Admin";
// import Employee from "./Employee";

// function App() {
//   const role = "admin";
//   let view = null;

//   if (role === "admin") {
//     view = <Admin />;
//   } else if (role === "employee") {
//     view = <Employee />;
//   } else {
//     view = <div>No Component Found For This Role</div>;
//   }

//   return (
//     <div className="App">
//       <h1 style={{textAlign:"center"}}>Session-7: Conditional Rendering + Styling Components</h1>
//       {view}
//     </div>
//   );
// }

// export default App;
import { useState } from "react";
import Admin from "./Admin";
import Employee from "./Employee";

function App() {
  const [role, setRole] = useState("admin");

  const toggleRole = () => {
    setRole((r) => (r === "admin" ? "employee" : "admin"));
  };

  let view = null;
  if (role === "admin") {
    view = <Admin />;
  } else if (role === "employee") {
    view = <Employee />;
  } else {
    view = <div>No Component Found For This Role</div>;
  }

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>
        Session-7: Conditional Rendering + Styling Components
      </h1>

      <div style={{ textAlign: "center", marginBottom: 16 }}>
        <button onClick={toggleRole}>
          Switch Role (Current: {role})
        </button>
      </div>

      {view}
    </div>
  );
}

export default App;

