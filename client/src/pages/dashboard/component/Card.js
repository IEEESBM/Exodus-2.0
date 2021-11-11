import React from 'react';

const Card = (props) => {
    return (
        <div className="card d-flex flex-column justify-content-center align-items-center" style={{"backgroundColor": props.bgcolor}}>
            <div className="card-img-center">
                <img className="card-img" src={props.imgsrc} alt="" />
            </div>
            <div className="card-body text-center" style={{"width": "15rem"}}>
                <p className="card-t">{props.title}</p>
                <p>{props.cardtext}</p>
            </div>
        </div>
    )
}

export default Card;
