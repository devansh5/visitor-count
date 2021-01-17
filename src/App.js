import React, { useEffect, useState } from "react";
import "./App.css";
import firebase from "./firebase";
import "firebase/firestore";
function App() {
  let database = firebase.firestore();
  const [detail, setdetail] = useState({});
  useEffect(() => {
    async function visitordetail() {
      const response = await fetch("https://ipapi.co/json/");
      const json = await response.json();
      console.log(json);
      setdetail(json);
      if (localStorage.getItem("key") === null) {
        localStorage.setItem("key", JSON.stringify(json));
        database
          .collection("visitordetails")
          .add({ json })
          .then(() => {
            console.log("Data added");
          })
          .catch((error) => console.log("Error", error));
      }
    }
    visitordetail();
  }, []);
  console.log(detail);

  return (
    <div className="App">
      <div className="App-header">Visitor Detail</div>
      <div className="det-container">
        <span >City Name : - {detail && detail.city}</span>
        <span >Country Name : - {detail && detail.country_name}</span>
        <span >IP address : - {detail && detail.ip}</span>
        <span > Postal : - {detail && detail.postal}</span>
      </div>
    </div>
  );
}

export default App;
