import React from "react";

const year = new Date().getFullYear();

function Foot() {
  return (
    <footer>
      <p> Copyright @ {year} </p>
    </footer>
  );
}

export default Foot;
