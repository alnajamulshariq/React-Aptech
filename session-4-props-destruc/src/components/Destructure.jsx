const Destructure = () => {
    const person = {
        name: "Shariq",
        email: "mschariquen@gmail.com",
        city: "Karachi",
        salary: 200
    };

    // Destructuring the object
    const { name, email, city, salary } = person;

    return (
        <div>
            <h2>Destructured Object</h2>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>City: {city}</p>
            <p>Salary: {salary}</p>
        </div>
    );
};


const Students = () => {
  const studentInfo = {
    name: "Ali",
    age: 22,
    course: "Computer Science"
  };

  const { name } = studentInfo; // destructuring

  return (
    <div>
      <h2>Students Component</h2>
      <p>Name: {name}</p>
    </div>
  );
};

export { Destructure, Students };