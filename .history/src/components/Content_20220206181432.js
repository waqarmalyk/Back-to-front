import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Card } from "./Card";

function Get() {
  const ref = useRef(null);

  const [data, setData] = useState([]);
  const [gridColumnWidth, setGridColumnWidth] = useState(null);

  useEffect(() => {
    setGridColumnWidth(ref.current.offsetWidth / 12);
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
    <div className="wrapper " ref={ref}>
      {console.log(gridColumnWidth, data)}
      {data.length > 0 &&
        !!gridColumnWidth &&
        data.map((row, rowIndex) => (
          <div className="card" key={rowIndex}>
            {row.columns.map((column, columnIndex) => (
              <Card
                imageUrl={column.imageUrl}
                title={column.title}
                width={column.width}
                gridColumnWidth={gridColumnWidth}
              />
            ))}
          </div>
        ))}
    </div>
  );
}

export default Get;
