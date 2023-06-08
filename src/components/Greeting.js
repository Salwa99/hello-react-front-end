import React, { useEffect, useState } from "react";

const Greeting = () => {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    fetchGreeting();
  }, []);

  const fetchGreeting = async () => {
    const response = await fetch("http://localhost:3000/random_greeting");
    const data = await response.json();
    setGreeting(data.greeting);
  };

  return (
    <div>
      <h1>Random Greeting</h1>
      <p>{greeting}</p>
    </div>
  );
};

export default Greeting;
