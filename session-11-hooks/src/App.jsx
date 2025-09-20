import { useState } from "react";

export default function App() {
  let [name, setName] = useState("Shariq");
  let changeName=()=>{
    setName("Shariq Najam");
  }

  let [stdInfo, setStdInfo] = useState({
    name: "Shariq",
    email: "shariq@gmail.com",
    age: 26,
    course: "MERN"
  });

  let changeIfo=()=>{
    setStdInfo(
      {
        name: "Shariq Najam",
        email: "mschariquen@gmail.com",
        age: 27,
        course: "Full Stack"
      }
    );
  }
  return (
    <>
      <h1>React Hooks</h1><br /><br /><br />
      <p>{name}</p><br /><br />
      <button onClick={changeName}>Change</button><br /><br /><br /><br />
      <p>{stdInfo.name}</p><br />
      <p>{stdInfo.email}</p><br />
      <p>{stdInfo.age}</p><br />
      <p>{stdInfo.course}</p><br />
      <button onClick={changeIfo}>Change Info</button>
    </>
  );
}