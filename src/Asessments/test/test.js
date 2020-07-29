import React, { useState, useEffect } from 'react';
import InputBlock from './Question';
import { Form } from 'antd';


const FullPage = () => {

  const handleSubmit = (event) => {
    const formData = new FormData(event.target);
    event.preventDefault();
    for (var [key, value] of formData.entries()){
      console.log(key, value);
    }
  }

  return (
    <div className="upform">
      <form onSubmit={handleSubmit}>
        <div className="upform-header" />
        <div className="upform-main">
        <div className="upform-main">
          <div className="input-block">
            <div className="label">
              Q1. If we give you a proven system to make at least $7,500 per
              month online, would you follow it to a tee?
            </div>
            <div className="input-control">
              <input
                id="toggle-on-q1"
                className="toggle toggle-left"
                name="q1"
                value="1"
                type="radio"
              />
              <label htmlFor="toggle-on-q1" className="btn"><span>1</span> Bajo</label>
              <input
                id="toggle-off-q1"
                className="toggle toggle-right"
                name="q1"
                value="3"
                type="radio"
              />
              <label htmlFor="toggle-off-q1" className="btn"><span>3</span> Medio</label>
              <input
                id="toggle-off-q1"
                className="toggle toggle-right"
                name="q1"
                value="5"
                type="radio"
              />
              <label htmlFor="toggle-off-q1" className="btn"><span>5</span> Alto</label>
            </div>
          </div>

          <div className="input-block">
            <div className="label">
              Q2. Would you be willing to invest at least 30 minutes per day to
              make it work?
            </div>
            <div className="input-control">
              <input
                id="toggle-on-q2"
                className="toggle toggle-left"
                name="q2"
                value="yes"
                type="radio"
              />
              <label htmlFor="toggle-on-q2" className="btn"><span>A</span> Yes</label>
              <input
                id="toggle-off-q2"
                className="toggle toggle-right"
                name="q2"
                value="no"
                type="radio"
              />
              <label htmlFor="toggle-off-q2" className="btn"><span>B</span> No</label>
            </div>
          </div>

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
              <label htmlFor="toggle-on-q3" className="btn"><span>A</span> Yes</label>
              <input
                id="toggle-off-q3"
                className="toggle toggle-right"
                name="q3"
                value="no"
                type="radio"
              />
              <label htmlFor="toggle-off-q3" className="btn"><span>B</span> No</label>
            </div>
          </div>

          <div className="input-block">
            <div className="label">What is your name?</div>
            <div className="input-control">
              <input type="text" className="required" autoComplete="off" />
            </div>
          </div>
        </div>
        </div>
        <div className="upform-footer">
          <button type="submit" className="btn btn-primary btn-lg">Enviar</button>
        </div>
      </form>
    </div>
  )
}

export default FullPage;