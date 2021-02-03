import React from 'react';
import './card.css';
export const Card = (props) => {

    return(
        <div className="card">
            <img src={`https://robohash.org/${props.contact.id}?set=set5`} alt="contact-image"/>
            <h1>{ props.contact.name }</h1>
        </div>
    )
}
