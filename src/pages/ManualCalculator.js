import React, { useState } from "react";
import { Link } from "react-router";
import "./manual.css";
export default function Home() {
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
    <div className="mapper">
    <div className="wrapper">




        {/* <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/substract' element={<Substract/> } />
        </Routes> */}
<div className="homebtn" >
    <Link to="/addAndSubstract">
  <button className="manual-btn"  style={{ background: "linear-gradient(135deg, #2cb349, #beb23f)" }}  >
    🧮 সহজে হোল্ডিং জমি যোগ/বিয়োগ ক্যালকুলেটরে যান
  </button>
</Link>
    <Link to="/converter">
  <button className="manual-btn"   style={{ background: "linear-gradient(135deg, #cf298f, #9c1d7c)" }}  >
    🧮 🧮 জমির পরিমান কনভার্টার (একর,শতক,কাঠা,বিঘা,আনা,গন্ডা)
  </button>
</Link>

</div>

      <div className="container">
        <h2 className="title">📍 Land Calculator</h2>

        <div className="row">
          <input
            type="text"
            placeholder="দাগের মোট পরিমান"
            value={totalDag}
            onChange={handleDagChange}
           className="inputm"
          />

          <input
            type="text"
            placeholder="অত্র খতিয়ানের অংশ"
            value={result}
            readOnly
           className="inputm" style={{ background: "#eaffea", fontWeight: "bold"}}
          />

          <input
            type="text"
            placeholder="জমির পরিমান"
            value={landAll}
            onChange={handleLandAllChange}
           className="inputm"
          />
        </div>
      </div>
    </div>
    
      <script async="async" data-cfasync="false" src="https://pl29154115.profitablecpmratenetwork.com/be348753f2d821e8940e89676b6e39b5/invoke.js"></script>
<div id="container-be348753f2d821e8940e89676b6e39b5"></div>
    </div>
  );
}

