import { useState } from "react";

export default function TruncateDescription({ text, maxLength = 50 }) {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncated = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <div>
      <p>
        {isTruncated
          ? text.slice(0, maxLength) + (text.length > maxLength ? "..." : "")
          : text}
      </p>
      {
        <button onClick={toggleTruncated}>
          {isTruncated ? "Show more" : "Show less"}
        </button>
      }
    </div>
  );
}
