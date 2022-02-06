import React, { useState } from "react";

export const Card = (props) => {
  const { width, gridColumnWidth, imageUrl, title } = props;

  const [inputTitle, setInputTitle] = useState(title);

  return (
    <div className={"details col-" + width}>
      <img
        className="img"
        src={imageUrl + "&width=" + gridColumnWidth * width + "&height="}
        alt={title}
      />
      <div>
        <h2 className="heading">{title + " - " + width}</h2>
        <button>Edit</button>
        <div className="form__group field">
          <input
            type="input"
            className="form__field"
            placeholder="Name"
            name="name"
            id="name"
            value={inputTitle}
            onChange={(e) => {
              setInputTitle(e.target.value);
            }}
          />
          <label className="form__label">New Title</label>
        </div>
      </div>
    </div>
  );
};
