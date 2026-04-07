import './App.css';
import React, { useState } from "react";

export default function App() {
  const [totalDag, setTotalDag] = useState("");
  const [result, setResult] = useState("");
  const [landAll, setLandAll] = useState("");

  const convertToEnglishNumber = (input) => {
    const banglaNumbers = "০১২৩৪৫৬৭৮৯";
    const englishNumbers = "0123456789";

    return input
      .toString()
      .split("")
      .map((char) => {
        const index = banglaNumbers.indexOf(char);
        return index > -1 ? englishNumbers[index] : char;
      })
      .join("");
  };

  const convertToBanglaNumber = (input) => {
    const banglaNumbers = "০১২৩৪৫৬৭৮৯";
    const englishNumbers = "0123456789";

    return input
      .toString()
      .split("")
      .map((char) => {
        const index = englishNumbers.indexOf(char);
        return index > -1 ? banglaNumbers[index] : char;
      })
      .join("");
  };

  const calculate = (dag, land) => {
    const dagEng = convertToEnglishNumber(dag);
    const landEng = convertToEnglishNumber(land);

    if (dagEng && landEng && !isNaN(dagEng) && !isNaN(landEng)) {
      const res = Number(landEng) / Number(dagEng);
      setResult(convertToBanglaNumber(res));
    } else {
      setResult("");
    }
  };

  const handleDagChange = (e) => {
    const value = e.target.value;
    setTotalDag(value);
    calculate(value, landAll);
  };

  const handleLandAllChange = (e) => {
    const value = e.target.value;
    setLandAll(value);
    calculate(totalDag, value);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h2 style={styles.title}>📍 Land Calculator</h2>

        <div style={styles.row}>
          <input
            type="text"
            placeholder="দাগের মোট পরিমান"
            value={totalDag}
            onChange={handleDagChange}
            style={styles.input}
          />

          <input
            type="text"
            placeholder="অত্র খতিয়ানের অংশ"
            value={result}
            readOnly
            style={{ ...styles.input, background: "#eaffea", fontWeight: "bold" }}
          />

          <input
            type="text"
            placeholder="জমির পরিমান"
            value={landAll}
            onChange={handleLandAllChange}
            style={styles.input}
          />
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #4facfe, #00f2fe)",
  },

  container: {
    padding: "20px",
    borderRadius: "12px",
    background: "#fff",
    boxShadow: "0 5px 20px rgba(0,0,0,0.2)",
  },

  title: {
    textAlign: "center",
    marginBottom: "15px",
  },

  row: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap", // mobile responsive (will stack if needed)
    justifyContent: "center",
  },

  input: {
    padding: "10px",
    width: "180px",
    fontSize: "14px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    outline: "none",
  },
};