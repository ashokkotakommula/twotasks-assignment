import React from 'react'
import './CardsList.css'

export default function CardsList({cardsList, deleteCard}) {
    return (
        <div className="cardslist">
            <h3>CardsList</h3>
            <h5>{cardsList.length === 0 ? "" : `Total Cards: ${cardsList.length}`}</h5>
            { 
                cardsList.length === 0 ? <div className="cards-msg">No cards...</div> : cardsList.map((num) => (
                    <div key={num.id} className="card-item">
                        <h4>{num.cardNumber}</h4>
                        <button onClick={() => deleteCard(num.id)}>&#9747;</button>
                    </div>
                )) 
            }
        </div>
    )
}
