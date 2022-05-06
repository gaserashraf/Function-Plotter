import "./style.css";
import React, { useState } from "react";
import PropTypes from "prop-types";

const Form = (props) => {
  let {
    funcStr,
    setFuncStr,
    minimum,
    setMinimum,
    maximum,
    setMaximum,
    setPlot,
    setClear,
  } = props;
  const [vaildFun, setVaildFun] = useState(true);
  const [emptyMn, setEmptyMn] = useState(false);
  const [emptyMx, setEmptyMx] = useState(false);

  //change function when user type
  const onChangeFun = (e) => {
    setFuncStr(e.target.value);
  };

  //change minimum when user type
  const onChangeMn = (e) => {
    setMinimum(e.target.value);
  };

  //change maximum when user type
  const onChangeMx = (e) => {
    setMaximum(e.target.value);
  };

  const checkFun = () => {
    if (funcStr == "") return false;
    const testFun = funcStr.replace("x", "1");
    let ans = null;
    try {
      ans = eval(testFun);
    } catch (e) {
      ans = null;
    }
    console.log("ans: ", ans);
    if (ans == null) return false;
    return true;
  };
  const checkInput = () => {
    let ret = checkFun();
    if (ret == false) setVaildFun(false);
    else setVaildFun(true);
    if (minimum == "") {
      setEmptyMn(true);
      ret = false;
    } else setEmptyMn(false);
    if (maximum == "") {
      setEmptyMx(true);
      ret = false;
    } else setEmptyMx(false);
    return ret;
  };
  //plot the function
  const plot = () => {
    if (!checkInput()) return;
    setPlot(true);
  };

  //clear the graph
  const clear = () => {
    setClear(true);
    setFuncStr("");
    setMaximum("");
    setMinimum("");
    setVaildFun(true);
    setEmptyMn(false);
    setEmptyMx(false);
  };

  // sample form
  return (
    <form className="needs-validation mt-3">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Function F(x)</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter a function in terms of x, e.g., 5*x^3 + 2*x."
                value={funcStr}
                onChange={onChangeFun}
              />
              {!vaildFun && <small className="valid">invaild function</small>}
              <small id="emailHelp" class="form-text text-muted mt-0">
                The following operators must be supported: + - / * ^.
              </small>
            </div>
          </div>

          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Minimum value of x</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter a value"
                value={minimum}
                onChange={onChangeMn}
              />
              {emptyMn && <small className="valid">Please enter a value</small>}
            </div>
          </div>

          <div className="col-md-3">
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">maximum value of x</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter a value"
                value={maximum}
                onChange={onChangeMx}
              />
              {emptyMx && <small className="valid">Please enter a value</small>}
            </div>
          </div>
        </div>
        <a class="btn btn-primary mr-3" onClick={plot}>
          Plot
        </a>
        <a class="btn btn-danger" onClick={clear}>
          Clear
        </a>
      </div>
    </form>
  );
};
Form.propTypes = {
  funcStr: PropTypes.string,
  setFuncStr: PropTypes.func,
  setMinimum: PropTypes.func,
  setMaximum: PropTypes.func,
  setPlot: PropTypes.func,
  setClear: PropTypes.func,
  maximum: PropTypes.number,
  minimum: PropTypes.number,
};
export default Form;
