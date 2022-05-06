import "./style.css";
import React, { useEffect, useState } from "react";
import functionPlot from "function-plot";
import PropTypes from "prop-types";
const Graph = (props) => {
  let { funcStr, minimum, maximum, plot, setPlot, clear, setClear } = props;
  const [fun, setFun] = useState("0");
  const [mn, setMn] = useState(-20);
  const [mx, setMx] = useState(20);

  useEffect(() => {
    functionPlot({
      title: `y = ${fun}`,
      target: ".test",
      width: "500",
      height: "500",
      xAxis: {
        label: "x - axis",
        domain: [mn, mx],
      },
      yAxis: {
        label: "y - axis",
      },
      grid: true,
      data: [
        {
          fn: fun,
          color: "#000",
        },
      ],
    });
  });
  console.log(fun);
  const setFuntoDraw = () => {
    setFun(funcStr);
    setMn(minimum);
    setMx(maximum);
  };
  useEffect(() => {
    if (!plot) return;
    setFuntoDraw();
    setPlot(false);
  }, [plot]);
  useEffect(() => {
    if (!clear) return;
    setFun("0");
    setClear(false);
  }, [clear]);
  return (
    <div className="container">
      <div className="text-white mt-3">
        <div className="test"></div>
      </div>
    </div>
  );
};
Graph.propTypes = {
  funcStr: PropTypes.string,
  maximum: PropTypes.number,
  minimum: PropTypes.number,
  setPlot: PropTypes.func,
  setClear: PropTypes.func,
  clear: PropTypes.bool,
  plot: PropTypes.bool,
};
export default Graph;
