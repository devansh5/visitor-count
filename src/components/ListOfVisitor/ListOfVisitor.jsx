import React, { useEffect, useState } from "react";
import firebase from "../../firebase";
import "firebase/firestore";
import classes from "./ListOfVisitor.module.css";
export default function ListOfVisitor() {
  let database = firebase.firestore();
  const [vlist, setVlist] = useState([]);
  useEffect(() => {
    database
      .collection("visitordetails")
      .get()
      .then(function (querySnapshot) {
        let a = [];
        querySnapshot.forEach(function (doc) {
          a.push(doc.data().json);
        });
        setVlist(a);
      });
  }, []);

  return (
    <div className={classes.container}>
      {vlist.map((detail) => {
        return (
          <div className={classes.box}>
            <span>City Name : - {detail?.city}</span>
            <span>Country Name : - {detail?.country_name}</span>
            <span>IP address : - {detail?.ip}</span>
            <span> Postal : - {detail?.postal}</span>
          </div>
        );
      })}
    </div>
  );
}
