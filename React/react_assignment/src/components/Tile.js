import React from "react";

const Tile = (props) => {
  return (
    <div className="list__item--wrapper">
      <div className="list__item__image--wrapper">
        <img src={props.data.image} alt="item" className="list__item__image" />
      </div>
      <div className="list__item__details">
        <div className="list__item__title--wrapper">
          <h3 className="list__item__title">{props.data.name}</h3>
        </div>
        <div className="list__item__rating--wrapper">
          <span className="list__item__rating">
            Rating : {props.data.rating}
          </span>
        </div>
        <div className="list__item__description--wrapper">
          <span className="list__item__description">
            {props.data.description}
          </span>
        </div>
      </div>
      <div className="list-item__delete-btn--wrapper">
        <i
          className="fas fa-times list-item__delete-btn"
          id={props.data.name}
          onClick={(event) => props.deleteItem(event.target.id)}
        ></i>
      </div>
    </div>
  );
};

export default Tile;
