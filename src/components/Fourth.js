import React from 'react';

import "./Fourth.css";

import Tick from "./img/tick.png"

function Fourth() {
  return (
    <div className='Fourth'>
        <img className='tick-logo my-5' src = {Tick} />

        <div className='greeting my-4'>
        <h2 className='text-center fw-bold'>Congratulations, Eren!</h2>
        <p style={{color: "grey"}}>You have completed onboarding, you can start using Eden</p>
        </div>

    </div>
  )
}

export default Fourth