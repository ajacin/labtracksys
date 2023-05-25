import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

function Test() {
  const { id } = useParams();
  const obj = useOutletContext();
  return (
    <div>
      {obj.title} {id}
    </div>
  );
}

export default Test;
