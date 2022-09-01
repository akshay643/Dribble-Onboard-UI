import React, {useState} from 'react'

import First from "./First"

import Second from './Second';

import Third from './Third';

import Fourth from "./Fourth"

// import ProgressBar from 'react-bootstrap/ProgressBar';

import { ProgressBar, Step } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";

import "./Form.css"

import Mainlogo from "./img/Mainlogo.png"


function Form() {

    const[page, setPage] = useState(0);

    const[progress, setprogress] = useState(15);


    function clickhandler(){
        setPage(page +1)
       return setprogress(progress + 35);

    }


    function pagedisplay(){
        if(page === 0 ){
            return <First />
        }
        if(page === 1 ){
            return <Second />
        }
        if(page === 2){
            return <Third />
        }
        if(page === 3){
            return <Fourth />
        }
    }
 
  return (
    <div className='Main'>


        <div className='mainForm'>

            <div className='logo text-center d-flex align-items-center justify-content-center'> 
                <img className='logo-img mx-2' src={Mainlogo} /> <span className='fw-bold fs-3'>Eden</span>
            </div>


            <div className='progressbar my-3'>
        
                <ProgressBar
                    height= {2}
                    percent={progress}
                    filledBackground="rgb(96, 83, 221)">
                    <Step transition="scale">
                    {({ accomplished }) => (
                        <p className='Counting-numbers'>1</p>
                    )}
                    </Step>
                    <Step transition="scale">
                    {({ accomplished }) => (
                                <p className='Counting-numbers'>2</p>

                    )}
                    </Step>
                    <Step transition="scale">
                    {({ accomplished }) => (
                                    <p className='Counting-numbers'>3</p>

                    )}
                    </Step>
                    <Step transition="scale">
                    {({ accomplished }) => (
                                    <p className='Counting-numbers'>4</p>

                    )}
                    </Step>
                </ProgressBar>

            </div>


            <div className='form-container my-5'>

                <div className='body'>{pagedisplay()}</div>

                <div className='footer'>
                    <button style={{backgroundColor:"#6053DD", color:"white"}} className="btn w-100 py-3" onClick = {clickhandler}>{page===3 ? "Launch Eden" : "Create Workspace" }</button>
                </div>

            </div>

         </div>

    </div>
  )
}

export default Form