import React, { useState } from "react";
import Form from "./containers/Form";
import Graph from "./containers/Graph";
import Navbar from "./containers/Navbar";
const Home = () => {
  let [funcStr, setFuncStr] = useState("");
  let [minimum, setMinimum] = useState("");
  let [maximum, setMaximum] = useState("");
  let [plot, setPlot] = useState(false);
  let [clear, setClear] = useState(false);
  return (
    <div className="">
      <Navbar />
      <Form
        funcStr={funcStr}
        setFuncStr={setFuncStr}
        minimum={minimum}
        setMinimum={setMinimum}
        maximum={maximum}
        setMaximum={setMaximum}
        setPlot={setPlot}
        setClear={setClear}
      />
      <Graph
        funcStr={funcStr}
        minimum={minimum}
        maximum={maximum}
        plot={plot}
        setPlot={setPlot}
        clear={clear}
        setClear={setClear}
      />
    </div>
  );
};

export default Home;
