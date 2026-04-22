import React, { useState, useEffect, useCallback } from "react";
import "./converter.css";
import { Link } from "react-router";

// Bangla → English
const toEnglish = (num) => {
  const bn = "০১২৩৪৫৬৭৮৯";
  const en = "0123456789";
  return num.replace(/[০-৯]/g, (d) => en[bn.indexOf(d)]);
};

// English → Bangla
const toBangla = (num) => {
  const bn = "০১২৩৪৫৬৭৮৯";
  return num.toString().replace(/\d/g, (d) => bn[d]);
};


  const rates = {
    acre: 100,
    shotok: 1,
    katha: 1.65,
    bigha: 33,
    ana: 2.0625,
    // gonda: 0.825,
  };

  const names = {
    acre: "একর",
    shotok: "শতক",
    katha: "কাঠা",
    bigha: "বিঘা",
    ana: "আনা",
    // gonda: "গন্ডা",
  };

export default function App() {
  const [input, setInput] = useState("");
  const [unit, setUnit] = useState("shotok");
  const [values, setValues] = useState({});



  // convert all
const convertAll = useCallback((val, unit) => {
  if (!val) {
    setValues({});
    return;
  }

  const num = parseFloat(toEnglish(val));
  if (isNaN(num)) return;

  const shotok = num * rates[unit];

  let result = {};
  Object.keys(rates).forEach((key) => {
    const v = (shotok / rates[key]).toFixed(4);
    result[key] = toBangla(v);
  });

  setValues(result);

  localStorage.setItem(
    "lastConversion",
    JSON.stringify({ val, unit })
  );
}, []);

  const handleInput = (e) => {
    const val = e.target.value;
    setInput(val);
    convertAll(val, unit);
  };

  const handleUnit = (e) => {
    setUnit(e.target.value);
    convertAll(input, e.target.value);
  };

  // swap (cycle unit)
  const swapUnit = () => {
    const keys = Object.keys(rates);
    const index = keys.indexOf(unit);
    const next = keys[(index + 1) % keys.length];
    setUnit(next);
    convertAll(input, next);
  };

  // load last
 useEffect(() => {
  const saved = localStorage.getItem("lastConversion");
  if (saved) {
    const { val, unit } = JSON.parse(saved);
    setInput(val);
    setUnit(unit);
    convertAll(val, unit);
  }
}, [convertAll]);

  const clearAll = () => {
    setInput("");
    setValues({});
    localStorage.removeItem("lastConversion");
  };

  return (

    <div className="converter">

    <div className="gotobtn">
          <Link to="/newcal">
          <button className="manual-btn"   style={{ background: "linear-gradient(135deg, #822a94, #452f68)" }}  >
            Ⓗ হোল্ডিং জমি যোগ/বিয়োগ ক্যালকুলেটর 
          </button> 
        </Link>
            <Link to="/">
          <button className="manual-btn"   style={{ background: "linear-gradient(135deg, #cf298f, #9c1d7c)" }} >
            Ⓜ️ ম্যানুয়াল ক্যালকুলেটর
          </button>
        </Link>
        </div>
    <div className="app">
        
      <div className="card">

        <h1>জমির পরিমান কনভার্টার</h1>

        <input
          value={input}
          onChange={handleInput}
          placeholder="সংখ্যা লিখুন (১২৩ / 123)"
        />

        <div className="row">
          <select value={unit} onChange={handleUnit}>
            {Object.keys(names).map((k) => (
              <option key={k} value={k}>
                {names[k]}
              </option>
            ))}
          </select>

          <button onClick={swapUnit}>↔</button>
        </div>

        <div className="results">
          {Object.keys(values).map((k) => (
            <p key={k}>
              {names[k]}: <strong>{values[k]}</strong>
            </p>
          ))}
        </div>

        <button className="clear" onClick={clearAll}>
          Clear
        </button>

      </div>
    </div>
    </div>
  );
}