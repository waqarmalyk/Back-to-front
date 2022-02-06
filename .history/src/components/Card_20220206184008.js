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
      <div className={"cardInfo"}>
        <div className={"cardTitle"}>
          <h2 className={"heading" + (isEditing ? " hide" : "")}>
            {title + " - " + width}
          </h2>
          <div className={"form__group field" + (isEditing ? "" : " hide")}>
            <input
              ref={inputRef}
              type="input"
              className="form__field"
              placeholder="Title"
              name="name"
              id="name"
              value={inputTitle}
              onChange={(e) => {
                setInputTitle(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="cardActions">
          {isEditing ? (
            <button onClick={saveHandleer}>Save</button>
          ) : (
            <button onClick={editHandler}>Edit</button>
          )}
        </div>
      </div>
    </div>
  );
};
