import { useState } from "react";

const Start = () => {
  const [button, setButton] = useState(true);

  const onClickStart = () => {
    setButton(false);
    console.log(button);
  };

  return (
    <>
      {button && (
        <button
          onClick={onClickStart}
          className="bg-purple-300 px-4 py-2 border-black border-2 rounded-lg hover:bg-purple-500 hover:border-4 hover:text-lg hover:font-semibold"
        >
          🐥 Start Flappy Bird!!! 🐥
        </button>
      )}
    </>
  );
};

export default Start;
// 버튼을 누르면 사라지고, console 찍기
