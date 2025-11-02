"use client";
import { useState } from "react";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value: string) => setInput((prev) => prev + value);
  const clearInput = () => {
    setInput("");
    setResult("");
  };

  const calculate = async () => {
    try {
      const res = await fetch(
        `http://127.0.0.1:8000/calculate?expression=${encodeURIComponent(input)}`
      );
      const data = await res.json();
      if (data.result !== undefined) setResult(data.result);
      else setResult("Error");
    } catch (err) {
      setResult("Error");
    }
  };

  const buttons = [
    "7", "8", "9", "/", 
    "4", "5", "6", "*", 
    "1", "2", "3", "-", 
    "0", ".", "=", "+"
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center text-white">
      <div className="bg-gray-800 rounded-2xl shadow-xl p-6 w-80">
        <h1 className="text-2xl mb-4 text-center">🧮 Smart Calculator</h1>
        <div className="bg-black p-3 rounded text-right text-xl font-mono mb-2">
          <div>{input || "0"}</div>
          <div className="text-green-400">{result}</div>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {buttons.map((b) => (
            <button
              key={b}
              onClick={() => (b === "=" ? calculate() : handleClick(b))}
              className={`p-3 rounded-lg text-lg font-semibold transition 
                ${b === "=" ? "bg-green-500 hover:bg-green-600" : "bg-gray-700 hover:bg-gray-600"}
              `}
            >
              {b}
            </button>
          ))}
          <button
            onClick={clearInput}
            className="col-span-4 bg-red-500 hover:bg-red-600 p-3 rounded-lg font-semibold"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
