import React from 'react';

const InputBlock = ({id, question}) => {
  console.log(id)
  return (
    <div className="input-block">
      <div className="label">{`Q${id}. ${question}`}</div>
      <div className="input-control">
              <input
                id={`toggle-on-q${id}`}
                className="toggle toggle-left"
                name={`q${id}`}
                value="1"
                type="radio"
              />
              <label htmlFor={`toggle-on-q${id}`} className="btn"><span>1</span> Bajo</label>
              <input
                id={`toggle-off-q${id}`}
                className="toggle toggle-right"
                name={`q${id}`}
                value="3"
                type="radio"
              />
              <label htmlFor={`toggle-off-q${id}`} className="btn"><span>3</span> Medio</label>
              <input
                id={`toggle-last-q${id}`}
                className="toggle toggle-right"
                name={`q${id}`}
                value="5"
                type="radio"
              />
              <label htmlFor={`toggle-last-q${id}`} className="btn"><span>5</span> Alto</label>
            </div>
    </div>
  )
}

export default InputBlock;