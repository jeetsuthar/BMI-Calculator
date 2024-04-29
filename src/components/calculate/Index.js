import React, { useState } from "react";
import "./style.css";

const Index = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [Message, setMessage] = useState(null);

  const handleCalculate = (event) => {
    event.preventDefault();
    
    if (!height || !weight) {
      alert("Please fill out all fields.");
      return;
    }

    const heightInMeters = parseFloat(height) / 100;
    const weightInKg = parseFloat(weight);

    if (isNaN(heightInMeters) || isNaN(weightInKg) || heightInMeters <= 0 || weightInKg <= 0) {
      alert("Please enter valid height and weight.");
      return;
    }
    
    const bmiValue = weightInKg / (heightInMeters * heightInMeters);
    setBMI(bmiValue.toFixed(3));

    if (bmiValue < 18.5) {
      setMessage("🙁 You are underweight.");
    }
    else if (bmiValue >= 18.5 || bmiValue <= 24.9){
      setMessage("🙂 You are Normal Weight");
    }
    else if (bmiValue >= 25 || bmiValue <= 29.9){
      setMessage("😣 You are Overweight");
    }
    else{
      setMessage("😒 You are Obesity");
    }

  };
  const ResetValues =()=>{
    setHeight('')
    setWeight('')

    setBMI('')

    setMessage('')
  }

  return (
    <section>

      <div className="main">
        <div className="input-field">
          <form>
            <div className="BMI">
              <p>Enter Your Height(cm):</p>
              <input
                type="text"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
                max={300}
              />
            </div>

            <div className="BMI">
              <p>Enter Your Weight(kg):</p>
              <input
                type="text"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
                max={300}
              />
            </div>

            <center>
              <button type="submit" onClick={handleCalculate}>
                Calculate BMI
              </button>
              <button type="reset" onClick={ResetValues}>Reset All</button>
            </center>
          </form>
        </div>

        <div className="result">
          <p className="tagLine" style={{display: bmi <= 0? 'block':'none'}}>Unlocking Health Insights: Navigate Your Wellness Journey with BMI.</p>
          {bmi !== null && (
            <>
              <p className="output">Your BMI: {bmi}</p>
              <p className="output">{Message}</p>
            </>
          )}
        </div>
      </div>
     
    </section>
  );
};

export default Index;
