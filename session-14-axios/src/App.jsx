import Axios  from "axios";
import React, { use, useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";
    Axios.get(apiUrl).then((res) => {
      setData(res.data);
    });
  });
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h1 className="text-center">All Data Fetch From API</h1>
            <table class="table table-double-bordered">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">UserId</th>
                  <th scope="col">Title</th>
                  <th scope="col">Body</th>
                </tr>
              </thead>
              <tbody>
                {data.map((index) => (
                  <tr>
                    <td>{index.id}</td>
                    <td>{index.userId}</td>
                    <td>{index.title}</td>
                    <td>{index.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </>
  );
}

export default App;
