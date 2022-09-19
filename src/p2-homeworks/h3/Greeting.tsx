import React, { ChangeEvent, KeyboardEvent } from "react";
import classes from "./Greeting.module.css";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
  name: string; // need to fix any
  setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void; // need to fix any
  addUser: () => void; // need to fix any
  error: string; // need to fix any
  totalUsers: number; // need to fix any
  onKeyPresHandler: (e: KeyboardEvent<HTMLInputElement>) => void;
};

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
  { name, setNameCallback, addUser, error, totalUsers, onKeyPresHandler } // деструктуризация пропсов
) => {
  const buttonStatus = name.length === 0;
  return (
    <div className={classes.someClass}>
      <input
        onChange={setNameCallback}
        value={name}
        onKeyUp={onKeyPresHandler}
        className={error && classes.error}
      />
      <button onClick={addUser} disabled={buttonStatus}>
        add
      </button>
      <span>{totalUsers}</span>
      <div className={classes.errorMessage}> {error}</div>
    </div>
  );
};

export default Greeting;
