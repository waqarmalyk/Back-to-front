import React from "react";

export const Card = (props) => {
  const { width, imageUrl, title } = props;
  return (
    <div className={"details col-" + column.width} key={columnIndex}>
      <img
        className="img"
        src={
          column.imageUrl + "&width=" + singleWidth * column.width + "&height="
        }
        alt={column.title}
      />
      <div>
        <h2 className="heading">{column.title + " - " + column.width}</h2>
        <button>Edit</button>
        <div className="form__group field">
          {/* <input
            type="input"
            className="form__field"
            placeholder="Name"
            name="name"
            id="name"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          /> */}
          <label className="form__label">New Title</label>
        </div>
      </div>
    </div>
  );
};
