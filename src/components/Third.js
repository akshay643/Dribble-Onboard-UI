import React ,{useState} from 'react'
import { CardImg } from 'react-bootstrap';

import "./Third.css"


import Card from 'react-bootstrap/Card';

import group from "./img/group.png"


function Third() {

    const[firstActive, setfirstActive] = useState("");
    const[secondActive, setsecondActive] = useState("");


    function selectCard(e){
      setfirstActive("primary")          
    }

    function selectSecondCard(){
        setsecondActive("primary")
    }




  
  return (
    <div >
        <div>
            <h3 className='text-center fw-bold'>How are you Planning to useEden?</h3>
            <p className='text-center text-muted'>We'll streamline your setup experience accordingly</p>
        </div>

        <div className='card-page my-3  text-start w-75 m-auto '>
            <Card style={{ width: '12rem' }} className="my-4 mx-2 " border= {firstActive} onClick = {selectCard}>
                <Card.Body>
                    <i class="fa-solid fa-user"></i>
                    <Card.Title className='my-3'> For Myself</Card.Title>
                    <Card.Text>
                        Write better. Think more clearly. stay organized.
                    </Card.Text>
        
                </Card.Body>
            </Card>

            <Card style={{ width: '12rem' }} className="my-4 mx-2" border= {secondActive} onClick = {selectSecondCard} >
                <Card.Body>
                    <img className='group-icon' src= {group} />
                    <Card.Title className='my-3'> With my team</Card.Title>
                    <Card.Text>
                        Wikis, docs, tasks & projects, all in one place.
                    </Card.Text>
            
                </Card.Body>
            </Card>
  </div>
  </div>
  )
}

export default Third