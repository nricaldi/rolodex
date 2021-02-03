import React from 'react';
import './card.css';
export const Card = (props) => {

    return(
        <div className="card">
            <img alt="profile" src={`https://robohash.org/${props.contact.id}?set=set5`}/>
            <h2>{ props.contact.name }</h2>
            <p>{ props.contact.email }</p>
        </div>
    )
}
