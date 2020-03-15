import React from 'react';

export const Card = props => {
  return (
  <div className="card-group">
    <div className="card">
      <img src={props.imgSrc} className="card-img-top" alt={props.alt} />
      <div className="card-body">
        <h5 className="card-title">{props.tile}</h5>
        <p className="card-text">{props.text}</p>
        <p className="card-text"><small className="text-muted">{props.footer}</small></p>
      </div>
    </div>
  </div>
  )
}