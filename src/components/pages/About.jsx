import { useEffect, useState } from "react";

export default function About() {
  const [textAlign, setTextAlign] = useState("center");
  console.log(textAlign);
  return (
    <div className="align-wrapper">
      <div className="text-erapper">
        <h1 style={{ textAlign: `${textAlign}` }}>Text Align</h1>
      </div>
      <div>
        <button className="align-button" onClick={() => setTextAlign("left")}>
          Left
        </button>
        <button className="align-button" onClick={() => setTextAlign("center")}>
          Center
        </button>
        <button className="align-button" onClick={() => setTextAlign("right")}>
          Right
        </button>
      </div>
    </div>
  );
}
