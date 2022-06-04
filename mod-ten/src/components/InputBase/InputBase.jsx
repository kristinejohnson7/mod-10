import React from "react";
import "./InputBase.css"

const InputBase = ({errorM, error, cardType, isCard, ...props}) => (
  <label className="input-label">
    <input className="input-root" {...props} />
    <div className="error-container">
    {errorM &&  <div className="error">{errorM}</div>}
    </div>
  </label>
)

export default InputBase;
