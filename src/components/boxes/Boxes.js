import React from 'react'
import './Boxes.css'

export default function Boxes({boxes, boxClick}) {
    return (
        <div className="box-container">
            {
                boxes.map((box) => (
                    <div key={box.id} className="box" onClick={(e) => boxClick(e, box.id)}>
                        {box.name}
                    </div>
                ))
            }
            <div className="box-five">5</div>
        </div>
    )
}
