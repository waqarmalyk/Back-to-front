import React, { useState, useEffect } from "react";
import axios from "axios";

function Get() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
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
    <div>
      {console.log(rows)}
      {rows.length > 0 &&
        rows.map((row, rowIndex) => (
          <ul key={rowIndex + row.type}>
            <li>{row.type}</li>
            <ul>
              {row.columns.map((column, columnIndex) => (
                <li key={columnIndex + column.type}>
                  <div className={"col" + column.width}>
                    <img src={column.imageUrl} alt={column.title} />
                    <h2>{column.title + " - " + column.width}</h2>
                  </div>
                </li>
              ))}
            </ul>
          </ul>
        ))}
    </div>
  );
}

export default Get;
