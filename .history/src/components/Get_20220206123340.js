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
    <div className="wrapper " ref={ref}>
      {console.log(singleWidth, data)}
      {data.length > 0 &&
        !!singleWidth &&
        data.map((row, rowIndex) => (
          <div className="card" key={rowIndex}>
            {row.columns.map((column, columnIndex) => (
              <div className={"details col-" + column.width} key={columnIndex}>
                <img
                  className="img"
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
    </div>
  );
}

export default Get;
