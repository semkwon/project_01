import React, { useEffect } from "react";

const Press = () => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      console.log("👇 Key down 👇", event.code);
    };
    const handleKeyUp = (event) => {
      console.log("Key up", event.code);
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <div>
      <h1>Press any Key</h1>
    </div>
  );
};

export default Press;
