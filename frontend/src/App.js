import { useState } from "react";
import axios from "axios";
import './index.css'

function App() {
  const [formData, setFormData] = useState({
    x: null,
    y: null,
    operation: "add",
  });
  const [solution, setSolution] = useState(null);

  const baseURL = "http://localhost:5000/calculate";

  const { x, y, operation } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!x || !y) {
      alert("Please add numbers")
      return;
    }
    axios.get(`${baseURL}/${operation}/${x}/${y}`).then(response => {
      setSolution(response.data.solution ?? "undefined")
    })
  };

  return (
    <div className="App">
      <form className="form" onSubmit={onSubmit}>
        <div className="top-row">
        <input
          type="number"
          onChange={onChange}
          id="x"
          name="x"
          value={x}
          placeholder="Enter a number"
        />
        <select
          id="operation"
          onChange={onChange}
          name="operation"
          value={operation}
        >
          <option value="add">+</option>
          <option value="subtract">-</option>
          <option value="multiply">*</option>
          <option value="divide">/</option>
        </select>
        <input
          type="number"
          onChange={onChange}
          id="y"
          name="y"
          value={y}
          placeholder="Enter a number"
        />
        </div>
        <button type="submit">Calculate</button>
      </form>
      <div className="solution">{solution}</div>
    </div>
  );
}

export default App;
