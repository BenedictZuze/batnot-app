import Battery from "./components/Battery";
import { useState, useEffect } from "react";
import { NavBar } from "./components/NavBar";

function App() {
  const [charge, setCharge] = useState(50);

  useEffect(() => {
    async function checkCharge() {
      try {
        const res = await fetch("http://localhost:3000/check");
        const { percentage, health } = await res.json();
        setCharge(percentage);
      } catch (error) {
        console.error(e.message);
      }
    }

    setInterval(() => {
      checkCharge();
    }, 3000);
  }, []);

  return (
    <div className="h-screen">
      <NavBar />
      <div className="flex w-full h-[80%] items-center justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-4">Battery Status</h1>
          <Battery charge={charge} />
          <h2 className="text-xl font-semibold">{charge}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
