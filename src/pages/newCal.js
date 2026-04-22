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

// ✅ INPUT = ACRE → convert to everything
const convertToLandFormat = (acreValue) => {
  if (isNaN(acreValue)) return null;

  const shotok = acreValue * 100;

  return {
    acre: acreValue,
    shotok: shotok,
    katha: shotok / 1.65,
    bigha: shotok / 33,
    ana: shotok / 0.825,
  };
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

  const lastResult =
    history.length > 0 ? history[history.length - 1].result : null;

  const land = convertToLandFormat(lastResult);

  return (
    <div className={`calculator ${type}`}>
      <h2 style={{ textAlign: "center", marginBottom: "14px" }}>
        {type === "add" ? "➕ জমি যোগ (একর) " : "➖ জমি বিয়োগ (একর) "}
      </h2>

      <input
        onKeyDown={handleKey}
        value={top}
        onChange={(e) => setTop(e.target.value)}
        placeholder="Top value (একর)"
        className="input"
      />

      <input
        onKeyDown={handleKey}
        value={bottom}
        onChange={(e) => setBottom(e.target.value)}
        placeholder={type === "add" ? "Add value (একর)" : "Subtract value (একর)"}
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

      {/* ✅ FINAL OUTPUT */}
      {lastResult !== null && land && (
        <div
          style={{
            marginTop: "15px",
            padding: "12px",
            background: "#222",
            borderRadius: "10px",
            color: "#fff",
            fontWeight: "bold",
            lineHeight: "1.8",
          }}
        >
          একর: {toBanglaNumber(land.acre.toFixed(10))} <br />
          শতক: {toBanglaNumber(land.shotok.toFixed(10))} <br />
          কাঠা: {toBanglaNumber(land.katha.toFixed(10))} <br />
          বিঘা: {toBanglaNumber(land.bigha.toFixed(10))} <br />
          আনা: {toBanglaNumber(land.ana.toFixed(10))}
        </div>
      )}
    </div>
  );
}

export default function App() {
  return (
    <div>
    <div className="app-container">
      <div className="homebtn">
        <Link to="/">
          <button
            className="manual-btn"
            style={{
              background: "linear-gradient(135deg, #822a94, #452f68)",
            }}
          >
            Ⓜ️ ম্যানুয়াল ক্যালকুলেটর
          </button>
        </Link>

        <Link to="/converter">
          <button
            className="manual-btn"
            style={{
              background: "linear-gradient(135deg, #cf298f, #9c1d7c)",
            }}
          >
            🔁 জমির পরিমান কনভার্টার
          </button>
        </Link>
      </div>

      <Calculator type="add" />
      <Calculator type="subtract" />

      

    </div>

  <div className="adds"  >
      <script async="async" data-cfasync="false" src="https://pl29154115.profitablecpmratenetwork.com/be348753f2d821e8940e89676b6e39b5/invoke.js"></script>
<div id="container-be348753f2d821e8940e89676b6e39b5"></div>

   </div>
    </div>
  );
}