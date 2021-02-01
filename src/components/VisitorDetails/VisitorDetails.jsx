import React, { useEffect, useState } from "react";
import firebase from "../../firebase";
import "firebase/firestore";
import classes from "./VisitorDetails.module.css";
function VisitorDetails() {
  let database = firebase.firestore();
  const [detail, setdetail] = useState({});
  useEffect(() => {
    async function visitordetail() {
      const response = await fetch("https://ipapi.co/json/");
      const json = await response.json();
      setdetail(json);
      if (localStorage.getItem("key") === null) {
        localStorage.setItem("key", JSON.stringify(json));
        database
          .collection("visitordetails")
          .add({ json })
          .then((docRef) => {
            localStorage.setItem("docid", docRef.id);
          })
          .catch((error) => console.log("Error", error));
      }
    }
    visitordetail();
  }, []);

  const deleteItems = () => {
    let db = firebase.firestore();
    let docid = localStorage.getItem("docid");
    if (docid === null) {
      alert("already deleted");
    } else {
      db.collection("visitordetails")
        .doc(docid)
        .delete()
        .then(() => {
          setdetail({});
          localStorage.removeItem("docid");
          localStorage.removeItem("key");
          alert("detail deleted");
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className={classes.app}>
      <div className={classes.appheader}>Visitor Detail</div>
      <div className={classes.container}>
        <span>City Name : - {detail?.city}</span>
        <span>Country Name : - {detail?.country_name}</span>
        <span>IP address : - {detail?.ip}</span>
        <span> Postal : - {detail?.postal}</span>
      </div>
      <div className={classes.delete}>
        <button onClick={deleteItems}>
          Delete{" "}
          <img
            src="https://img.icons8.com/dusk/64/000000/delete-forever.png"
            width="100"
          />
        </button>
      </div>
    </div>
  );
}

export default VisitorDetails;
