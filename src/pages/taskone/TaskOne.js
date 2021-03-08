import React, {useCallback, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import CardsList from '../../components/cardslist/CardsList';
import InputComponent from '../../components/inputComponent/InputComponent'
import './Taskone.css'

let idx = 1;

export default function TaskOne() {
    //one => first-input-field simlaryly two, three, four
    const [one, setOne] = useState("")
    const [two, setTwo] = useState("")
    const [three, setThree] = useState("")
    const [four, setFour] = useState("")
    const [cardsList, setCardsList] = useState([])

    //addVals => fills the clipboard values into fields
    const addVals =  useCallback(() => {
        if(one.length > 4 || one.length === 16) {
            const oneVal = Number(one.slice(0, 4))
            const twoVal = Number(one.slice(4, 8));
            const threeVal = Number(one.slice(8, 12));
            const fourVal = Number(one.slice(12, 16))
            setOne(oneVal)
            setTwo(twoVal)
            setThree(threeVal)
            setFour(fourVal)
            let changeFocus = document.getElementById("four");
            changeFocus.focus()
           
        } else {
            return
        }
    }, [one])
    
    useEffect(() => {
        addVals()
    }, [addVals])
    
    //oneInputChange => first-input-field change similarly two, three, four
    const oneInputChange = (e) => {
        setOne(e.target.value)
        if(e.target.value.length === 4 && !one.includes(" ")) {
            let changeFocus = document.getElementById("two");
            changeFocus.focus()
        }
        
    }

    const twoInputChange = (e) => {
        setTwo(e.target.value)
        if(e.target.value.length === 4 && !two.includes(" ")) {
            let changeFocus = document.getElementById("three");
            changeFocus.focus()
        }
    }

    const threeInputChange = (e) => {
        setThree(e.target.value)
        if(e.target.value.length === 4 && !three.includes(" ")) {
            let changeFocus = document.getElementById("four");
            changeFocus.focus()
        }

    } 

    const fourInputChange = (e) => {
        setFour(e.target.value)
        if(e.target.value.length === 4 && !four.includes(" ")) {
            let changeFocus = document.querySelector("button");      
            changeFocus.focus()
        }
        
    }

    //deletes the card from list
    const deleteCard = (id) => {
        const newList = cardsList.filter(num => num.id !== id)
        setCardsList(newList)
    }

    //when submit or enter pressed
    const onSubmitData = e => {
       e.preventDefault();
        if(!one || !two || !three || !four) {
           alert("Enter a Valid Card Number")
           return
        }
           
        const allInputs = [`${one}${two}${three}${four}`].join();
        setCardsList([...cardsList, {id: idx++, cardNumber: allInputs}])
        setOne("")
        setTwo("")
        setThree("")
        setFour("")
           
    }

    //change input focus when pressed arrows onChangeOneFoucs similarly two, three, four.
    const onChangeOneFocus = e => {
        if(e.keyCode === 39) {
            let changeFocus = document.getElementById("two");
            changeFocus.focus() 
        }
    }

    const onChangeTwoFocus = e => {
        if(e.keyCode === 39) {
            let changeFocus = document.getElementById("three");
            changeFocus.focus() 
        }
        if(e.keyCode === 37) {
            let changeFocus = document.getElementById("one");
            changeFocus.focus() 
        }
    }

    const onChangeThreeFocus = e => {
        if(e.keyCode === 39) {
            let changeFocus = document.getElementById("four");
            changeFocus.focus() 
        }
        if(e.keyCode === 37) {
            let changeFocus = document.getElementById("two");
            changeFocus.focus() 
        }
    }

    const onChangeFourFocus = e => {
        if(e.keyCode === 37) {
            let changeFocus = document.getElementById("three");
            changeFocus.focus() 
        }
    }
    
   
    return (
        <div className="main-container">
            <h3>Task - 1 Credit Card</h3>
            <InputComponent 
                one={one} 
                two={two} 
                three={three} 
                four={four} 
                oneInputChange={oneInputChange} 
                twoInputChange={twoInputChange} 
                threeInputChange={threeInputChange} 
                fourInputChange={fourInputChange} 
                onChangeOneFocus={onChangeOneFocus} 
                onChangeTwoFocus={onChangeTwoFocus} 
                onChangeThreeFocus={onChangeThreeFocus} 
                onChangeFourFocus={onChangeFourFocus} 
                onSubmitData={onSubmitData} 
            />
            <CardsList cardsList={cardsList} deleteCard={deleteCard} />
            <Link to="/task-two"><button className="task-two-btn">Go to Task Two</button></Link>
        </div>
    )
}
