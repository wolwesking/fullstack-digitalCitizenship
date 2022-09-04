import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from 'react'
import PageMain from "./components/PageMain"
import PagePrivacy from "./components/PagePrivacy";
import PageHacking from "./components/PageHacking";
import PageBully from "./components/PageBully";
import PageFoot from "./components/PageFoot";
import PageSrc from "./components/PageSrc";
import PageBye from "./components/PageBye";

function App() {
  const firebaseConfig = {
    // ...
    // The value of `databaseURL` depends on the location of the database
    databaseURL: "", //TODO add your own realtime database url
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app)

  const [data, setData] = useState()

  //read
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

  if (data === 0) {
    return (
      <div className="App">
        <PageMain />
      </div>
    )
  } else if (data === 1) {
    return (
      <div className="App">
        <PageBully />
      </div>
    )
  } else if (data === 2) {
    return (
      <div className="App">
        <PagePrivacy />
      </div>
    )
  } else if (data === 3) {
    return (
      <div className="App">
        <PageHacking />
      </div>
    )
  } else if (data === 4) {
    return (
      <div className="App">
        <PageFoot />
      </div>
    )
  } else if (data === 5) {
    return (
      <div className="App">
        <PageSrc />
      </div>)

  }
  else if (data === 6) {
    return (
      <div className="App">
        <PageBye />
      </div>)

  }

}


export default App;
