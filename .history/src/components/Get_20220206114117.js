import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

function Get() {
  const ref = useRef(null);

  const [data, setData] = useState([]);
  const [singleWidth, setSingleWidth] = useState(null);

  useEffect(() => {
    setSingleWidth(ref.current.offsetWidth / 12);
    axios
      .get("https://storage.googleapis.com/aller-structure-task/test_data.json")
      .then((res) => {
        setData(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container" ref={ref}>
      {console.log(singleWidth, data)}
      {data.length > 0 &&
        !!singleWidth &&
        data.map((row, rowIndex) => (
          <div className="row1-container" key={rowIndex}>
            {row.columns.map((column, columnIndex) => (
              <div className={"article col-" + column.width} key={columnIndex}>
                <img
                  src={
                    column.imageUrl +
                    "&width=" +
                    singleWidth * column.width +
                    "&height="
                  }
                  alt={column.title}
                />
                <h2 className="heading">
                  {column.title + " - " + column.width}
                </h2>
              </div>
            ))}
          </div>
        ))}
      <div class="row1-container">
        <div class="box box-down cyan">
          <h2>Supervisor</h2>
          <p>Monitors activity to identify project roadblocks</p>
          <img
            src="https://assets.codepen.io/2301174/icon-supervisor.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Get;
