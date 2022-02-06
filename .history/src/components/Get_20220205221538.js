import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

function Get() {
  const ref = useRef(null);
  const [rows, setRows] = useState([]);
  const [singleWidth, setSingleWidth] = useState(0);
  useEffect(() => {
    console.log(ref.current.offsetWidth);
    axios
      .get("https://storage.googleapis.com/aller-structure-task/test_data.json")
      .then((res) => {
        setRows(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container" ref={ref}>
      {console.log(rows)}
      {rows.length > 0 &&
        rows.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.columns.map((column, columnIndex) => (
              <div className={"article col-" + column.width} key={columnIndex}>
                <img src={column.imageUrl} alt={column.title} />
                <h2 className="heading">
                  {column.title + " - " + column.width}
                </h2>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}

export default Get;
