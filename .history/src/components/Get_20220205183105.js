import React, { useState, useEffect } from "react";
import axios from "axios";

function Get() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios
      .get("https://storage.googleapis.com/aller-structure-task/test_data.json")
      .then((res) => {
        // console.log(res.data[0]);
        // for (let i = 0; i < res.data[0].length; i++)
        //   console.log(res.data[0][i]);

        setRows(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container">
      {rows.length > 0 &&
        rows.map((row, rowIndex) => (
          <ul key={rowIndex + row.type}>
            <li>{row.type}</li>
            <ul>
              {row.columns.map((column, columnIndex) => (
                <li key={columnIndex + column.type}>
                  <div className="col-type">{column.type}</div>
                  <div className="col-width">{column.width}</div>
                  <p className="col-url">{column.url}</p>
                  <h2 className="col-headings">
                    {column.title + " - " + column.width}
                  </h2>
                  <img
                    className="col-imgs"
                    src={column.imageUrl}
                    alt={column.title}
                  />
                </li>
              ))}
            </ul>
          </ul>
        ))}
    </div>
  );
}

export default Get;
