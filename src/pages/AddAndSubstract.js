import React, { useState, useEffect } from "react";
import "./substract.css";
import { Link } from "react-router";

const toBanglaNumber = (num) => {
  const en = "0123456789.";
  const bn = "০১২৩৪৫৬৭৮৯.";
  return num
    .toString()
    .split("")
    .map((c) => (en.includes(c) ? bn[en.indexOf(c)] : c))
    .join("");
};

const toEnglishNumber = (str) => {
  const bn = "০১২৩৪৫৬৭৮৯";
  const en = "0123456789";
  return str
    .toString()
    .split("")
    .map((c) => (bn.includes(c) ? en[bn.indexOf(c)] : c))
    .join("");
};

function Calculator({ type }) {
  const [top, setTop] = useState("");
  const [bottom, setBottom] = useState("");
  const [history, setHistory] = useState([]);

  const storageKey = type === "add" ? "add-history" : "subtract-history";

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    if (saved) setHistory(JSON.parse(saved));
  }, [storageKey]);

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(history));
  }, [history, storageKey]);

  const calculate = () => {
    const t = parseFloat(toEnglishNumber(top));
    const b = parseFloat(toEnglishNumber(bottom));
    if (isNaN(t) || isNaN(b)) return;

    const result = type === "add" ? t + b : t - b;

    setHistory((prev) =>
      [...prev, { top: t, bottom: b, result }].slice(-7)
    );

    setTop(result.toString());
    setBottom("");
  };

  const handleKey = (e) => {
    if (e.key === "Enter") calculate();
  };

  return (

   

    <div className={`calculator ${type}`}>
      <h2 style={{ textAlign: "center", marginBottom: "14px" }}>
        {type === "add" ? "➕ Add Tracker" : "➖ Subtract Tracker"}
      </h2>

      <input
        onKeyDown={handleKey}
        value={top}
        onChange={(e) => setTop(e.target.value)}
        placeholder="Top value"
        className="input"
      />

      <input
        onKeyDown={handleKey}
        value={bottom}
        onChange={(e) => setBottom(e.target.value)}
        placeholder={
          type === "add" ? "Add value" : "Subtract value"
        }
        className="input"
      />

      <div className="button-row">
        <button onClick={calculate} className="button">
          Calculate
        </button>
        <button
          onClick={() => {
            setHistory([]);
            localStorage.removeItem(storageKey);
          }}
          className="button"
        >
          Clear
        </button>
      </div>

      <div className="history">
        {history.map((item, index) => (
          <div key={index} className="history-card">
            <div style={{ fontSize: "12px", opacity: 0.7 }}>
              #{index + 1}
            </div>
            <div>{toBanglaNumber(item.top)}</div>
            <div>
              {type === "add" ? "+ " : "- "}
              {toBanglaNumber(item.bottom)}
            </div>
            <div>────────</div>
            <div style={{ fontWeight: "bold", fontSize: "18px" }}>
              {toBanglaNumber(item.result)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="app-container">

<div className="homebtn">

   <Link to="/">
  <button className="manual-btn">
    🧮 Manual Calculator
  </button>
</Link>

</div>

      <Calculator type="add" />
      <Calculator type="subtract" />
    </div>
  );
}