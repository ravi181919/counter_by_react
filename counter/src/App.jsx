import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const addByOne = () => {
    setCount(count + 1); 
  };

  const decByOne = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
      alert(`Only Positive Count is allowed!`);
    }
  };

  const reStart = () => {
    setCount(0);
  };
  return (
    <div className="h-screen w-full bg-zinc-800 flex items-center text-white justify-center font-[Poppins]">
      <div className="w-[35vw]  bg-slate-300 flex flex-col items-center gap-4 rounded-md">
        <div className="flex items-center justify-center w-full mt-5">
          <h1 className="text-[2vw] text-red-400  font-medium px-4 ">
            Couter Application
          </h1>
        </div>
        <div className=" mt-5">
          <p className="font-medium w-full text-black">
            Count is :{' '}
            <span className="py-1 px-4 w-fit rounded-md text-white bg-zinc-600">
              {count}
            </span>
          </p>
        </div>
        <div className="mt-5 mb-5 flex gap-5 ">
          <button
            onClick={addByOne}
            className="bg-green-800  font-medium rounded-md px-2 py-1"
          >
            Add by 1{" "}
          </button>
          <button
            onClick={decByOne}
            className="bg-zinc-700  font-medium rounded-md px-2 py-1"
          >
            Dec by 1 
          </button>
          <button
            onClick={reStart}
            className="bg-red-700  font-medium rounded-md px-2 py-1"
          >
            Restart
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
