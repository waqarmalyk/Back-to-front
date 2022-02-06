import React, { useRef, useState } from "react";

export const Card = (props) => {
  const { width, gridColumnWidth, imageUrl, title } = props;

  const inputRef = useRef();
  const [inputTitle, setInputTitle] = useState();
  const [isEditing, setIsEditing] = useState(false);

  const editHandler = (e) => {
    setIsEditing(true);
    setInputTitle(title);
    inputRef.current.focus();
  };

  const saveHandleer = () => {
    setIsEditing(false);
  };

  return (
    <div className={"details col-" + width}>
      <img
        className="img"
        src={imageUrl + "&width=" + gridColumnWidth * width + "&height="}
        alt={title}
      />
      <div>
        {isEditing ? (
          <>
            <div className="form__group field">
              <input
                ref={inputRef}
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
            <button onClick={saveHandleer}>Save</button>
          </>
        ) : (
          <>
            <h2 className="heading">{title + " - " + width}</h2>
            <button onClick={editHandler}>Edit</button>
          </>
        )}
      </div>
    </div>
  );
};
