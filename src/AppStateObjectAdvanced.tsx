// App State Object with input + loading

import { useState, useEffect, ChangeEvent } from "react";

interface Person {
  firstName: string;
  lastName: string;
}

const App = () => {
  const [person, setPerson] = useState<Person>({ firstName: "", lastName: "" });
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setPerson({ firstName: "John", lastName: "Doe" });
      setLoading(false);
    }, 2000);
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPerson({ ...person, [e.target.name]: e.target.value });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>
        {person.firstName} {person.lastName}
      </h1>
      <input
        name="firstName"
        type="text"
        value={person.firstName}
        onChange={handleInputChange}
        placeholder="First Name"
      />
      <input
        name="lastName"
        type="text"
        value={person.lastName}
        onChange={handleInputChange}
        placeholder="Last Name"
      />
    </div>
  );
};

export default App;
