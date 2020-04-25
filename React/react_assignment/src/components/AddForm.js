import React, { useState } from "react";

const AddForm = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const handleSubmit = () => {
    const newItem = {
      name,
      description,
      rating,
      image: imgUrl,
    };
    props.setItems([...props.items, newItem]);
    props.setOpenAddForm(false);
  };

  console.log("form", props.items);

  return (
    <div className={props.className}>
      <form className="add-form--wrapper">
        <div className="add-form__title--wrapper">
          <h3 className="add-form__title">ADD ITEM</h3>
        </div>
        <div className="add-form__input--wrapper">
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Name"
            className="add-form__input"
          />
        </div>
        <div className="add-form__input--wrapper">
          <textarea
            name="desription"
            id="description"
            placeholder="Description"
            value={description}
            className="add-form__textarea"
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="add-form__input--wrapper">
          <input
            type="text"
            name="rating"
            id="rating"
            value={rating}
            onChange={(event) => setRating(event.target.value)}
            placeholder="Rating"
            className="add-form__input"
          />
        </div>
        <div className="add-form__input--wrapper">
          <input
            type="text"
            placeholder="Image Source"
            value={imgUrl}
            className="add-form__input"
            onChange={(event) => setImgUrl(event.target.value)}
          />
        </div>

        <button
          className="add-form__submit-btn"
          type="submit"
          onClick={() => handleSubmit()}
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default AddForm;
