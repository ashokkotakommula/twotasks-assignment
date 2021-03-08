import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import Boxes from '../../components/boxes/Boxes';
import './TaskTwo.css'

export default function TaskTwo() {
    const [click, setClick] = useState(false);
    const boxes = [
        {
            id: "one",
            name: 1
        },
        {
            id: "two",
            name: 2,
        },
        {
            id: "three",
            name: 3,
        },
        {
            id: "four",
            name: 4
        }
    ]

    //change class name when clicked
    const changeClassName = (e) => {
        if(click === false) {        
           e.target.className = "box-up"
           setClick(true)
           
        } else {
            setClick(false)
            e.target.className = "box"
           
        }
    }
    
    //apply change classname when clicked respective box id
    const boxClick = (e, id) => {
        if(id === "one") {   
           changeClassName(e)
        }
        if(id === "two") {
        changeClassName(e)
        }
        if(id === "three") {
            changeClassName(e)
        }
        if(id === "four") {
            changeClassName(e)
        }
    }
    
    return (
        <div className="main-box">
            <h3 className="head">TASK - 2 BOXES</h3>
            <Boxes boxes={boxes} boxClick={boxClick}/>
            <button className="goBack"><Link to="/">Go to Task 1</Link></button> 
        </div>
    )
}
