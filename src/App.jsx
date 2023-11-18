import { useState } from "react";

import 'bootstrap/dist/css/bootstrap.css'

function App() {

  const [packed,setPacked]=useState(
[
    { name: "passport", isPacked: true },
    { name: "toothbrush", isPacked: false },
    { name: "tablet", isPacked: true },
    { name: "clothes", isPacked: false },
  ]
  )
  const packing = (name, newval) => {

    setPacked((preState) =>
      preState.map((obj) =>
        obj.name === name ? { ...obj, isPacked: newval } : obj
      )
    );
  }

  return (
    <>
    
      {packed.map((pack, index)=>(
        <div key={index}>
          {
           pack.isPacked?
           <li onClick={() => packing(pack.name, !pack.isPacked)} >
            <del>
              <input type="checkbox" defaultChecked={true} /> {pack.name}
            </del>
              </li>:<li onClick={() => packing(pack.name, !pack.isPacked)}><input type="checkbox" />{pack.name}</li>
            
          }
          
         </div>
      ))
    }

    </>
  )
}

export default App
