import React from 'react';

const InputBlock = () => {
  return (
    <div className="input-block">
      <div className="label">Q3. Would you like to get started NOW?</div>
      <div className="input-control">
        <input
          id="toggle-on-q3"
          className="toggle toggle-left"
          name="q3"
          value="yes"
          type="radio"
        />
        <label for="toggle-on-q3" className="btn"><span>A</span> Yes</label>
        <input
          id="toggle-off-q3"
          className="toggle toggle-right"
          name="q3"
          value="no"
          type="radio"
        />
        <label for="toggle-off-q3" className="btn"><span>B</span> No</label>
      </div>
    </div>
  )
}

export default InputBlock;