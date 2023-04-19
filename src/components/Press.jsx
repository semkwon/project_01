import React, { useEffect } from "react";

const Press = () => {
  useEffect(() => {
    const pressKeyDown = (event) => {
      if (event.key === "ArrowUp") {
        console.log("위로 👆");
      } else if (event.key === "ArrowDown") {
        console.log("아래로 👇");
      }
    };
    window.addEventListener("keydown", pressKeyDown);
    return () => {
      window.removeEventListener("keydown", pressKeyDown);
    };
  }, []);

  return (
    <div>
      <h1>위로 👆 or 아래로 👇</h1>
    </div>
  );
};

export default Press;
