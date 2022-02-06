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
    <div>
      <ul>
        {rows.length > 0 &&
          rows.map((row, rowIndex) => (
            <>
              <li>{row.type}</li>
              <ul key={rowIndex}>
                {row.columns.map((column, columnIndex) => (
                  <li>{column.title}</li>
                ))}
              </ul>
            </>
          ))}
      </ul>
    </div>
  );
}

export default Get;
