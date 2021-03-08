import React from 'react'
import "./InputComponent.css"

export default function InputComponent({one, two, three, four, oneInputChange, twoInputChange, threeInputChange, fourInputChange, onChangeOneFocus, onChangeTwoFocus, onChangeThreeFocus, onChangeFourFocus, onSubmitData}) {
    return (
        <form onSubmit={onSubmitData}>
             <p>Card Number*</p>
                <input type="number" id="one"  value={one} onChange={oneInputChange} onKeyUp={onChangeOneFocus} placeholder="XXXX"/>
                <input type="number" id="two" value={two} onChange={twoInputChange} onKeyUp={onChangeTwoFocus} placeholder="XXXX"/>
                <input type="number" id="three" value={three} onChange={threeInputChange} onKeyUp={onChangeThreeFocus} placeholder="XXXX"/>
                <input type="number" id="four" value={four} onChange={fourInputChange} onKeyUp={onChangeFourFocus} placeholder="XXXX"/>
                <button onClick={onSubmitData}>Submit</button>
        </form>
    )
}
