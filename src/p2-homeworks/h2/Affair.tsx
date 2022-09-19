import React from "react";
import { AffairType } from "./HW2";
import affairs from "./Affairs";

type AffairPropsType = {
  // key не нужно типизировать
  affair: AffairType; // need to fix any
  deleteAffairCallback: (_id: number) => void; // need to fix any
};

function Affair(props: AffairPropsType) {
  const deleteCallback = () => {
    return props.deleteAffairCallback(props.affair._id);
  }; // need to fix

  return (
    <div>
      <button onClick={() => deleteCallback()}>X</button>
      {props.affair.name} {props.affair.priority}
    </div>
  );
}

export default Affair;
