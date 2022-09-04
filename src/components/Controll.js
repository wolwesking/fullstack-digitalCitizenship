import React from 'react'
import { initializeApp } from "firebase/app";
import { getDatabase, onValue, ref, update } from "firebase/database";
import { useEffect, useState } from 'react'


function Controll() {

  const firebaseConfig = {
    // ...
    // The value of `databaseURL` depends on the location of the database
    databaseURL:"" //TODO add your own realtime dataabase url
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app)

  const [data, setData] = useState()

  useEffect(() => {

    onValue(ref(db), sn => {

      const dataC = sn.val();

      if (dataC !== null) {
        Object.values(dataC).map((x) => {
          setData(dataC.page)
          console.log(data)
        })
      }
    })
  })

  function Forward() {
    update(ref(db), {
      'page': data + 1
    });

  }
  function Backward() {
    update(ref(db), {
      'page': data - 1
    });
  }

  if (data === 0) {
    return (
      <div className="App">
        <button onClick={Backward}>Backward</button>
        <button onClick={Forward}>Forward</button>
        <h1>PageMain</h1>
      </div>
    )
  } else if (data === 1) {
    return (
      <div className="App">
        <button onClick={Backward}>Backward</button>
        <button onClick={Forward}>Forward</button>
        <h1>PageBully</h1>
      </div>
    )
  } else if (data === 2) {
    return (
      <div className="App">
        <button onClick={Backward}>Backward</button>
        <button onClick={Forward}>Forward</button>
        <h1>PagePrivacy</h1>
      </div>
    )
  } else if (data === 3) {
    return (
      <div className="App">
        <button onClick={Backward}>Backward</button>
        <button onClick={Forward}>Forward</button>
        <h1>PageHacking</h1>
      </div>
    )
  } else if (data === 4) {
    return (
      <div className="App">
        <button onClick={Backward}>Backward</button>
        <button onClick={Forward}>Forward</button>
        <h1>PageFoot</h1>
      </div>
    )
  }else if (data === 5){
    return (
      <div className="App">
        <button onClick={Backward}>Backward</button>
        <button onClick={Forward}>Forward</button>
        <h1>PageSrc</h1>
      </div>
    )
  }else if (data === 6){
    return (
      <div className="App">
        <button onClick={Backward}>Backward</button>
        <button onClick={Forward}>Forward</button>
        <h1>PageBye</h1>
      </div>
    )
  } else {
    return (
      <div className="App">
        <button onClick={Backward}>Backward</button>
        <button onClick={Forward}>Forward</button>
        <h1>{data}</h1>
      </div>
    )
  }

}

export default Controll