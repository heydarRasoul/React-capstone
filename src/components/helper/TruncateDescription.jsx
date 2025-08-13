import { useState } from "react";

export default function TruncateDescription({ text, maxLength = 50 }) {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncated = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <div className="truncate-wrapper">
      <p className="truncate-text">
        {isTruncated
          ? text.slice(0, maxLength) + (text.length > maxLength ? "..." : "")
          : text}
      </p>
      {
        <button className="show-hide-button" onClick={toggleTruncated}>
          {isTruncated ? "More" : "Less"}
        </button>
      }
    </div>
  );
}
