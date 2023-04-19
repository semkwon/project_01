import React, { useEffect } from "react";

const Press = () => {
  let keys = {};

  useEffect(() => {
    const handleKeyDown = (event) => {
      keys[event.code] = true;
      console.log(keys);
    };
    const handleKeyUp = (event) => {
      keys[event.code] = false;
      console.log(keys);
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
