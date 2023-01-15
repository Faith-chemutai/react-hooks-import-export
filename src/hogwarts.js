import React from "react";
import aDifferentName from "./houses/whoseHouse";

function Hogwarts() {
  aDifferentName(); // => "HAGRID'S HOUSE!"

  return <h1>Welcome to Hogwarts!</h1>;
}
export default Hogwarts