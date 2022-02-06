import React, {useState, useEffect} from 'react';
import axios from 'axios'

function Get() {

    const [rows, setRows] = useState([])
    useEffect(()=> {
        axios.get('https://storage.googleapis.com/aller-structure-task/test_data.json')
        .then(res => {
            console.log(res);
        })
        .catch(err =>{
            console.log(err);
        })
    })
  return <div>
            <ul>
                {
                    rows.map(row => <li key= {rows.url}>
{rows}
                    </li> )
                }
            </ul>
  </div>;
}

export default Get;
