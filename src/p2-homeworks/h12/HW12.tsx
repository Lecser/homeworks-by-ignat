import React from "react";
import s from "./HW12.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppStoreType } from "../h10/bll/store";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import { changeThemeC } from "./bll/themeReducer";

const themes = ["dark", "red", "some"];

function HW12() {
  // useSelector
  const dispatch = useDispatch();
  // useDispatch, onChangeCallback
  const onChangeCallback = (value: string) => {
    dispatch(changeThemeC(value));
  };
  const theme = useSelector<AppStoreType, string>(
    (state) => state.changeTheme.theme
  );

  return (
    <div className={s[theme]}>
      <hr />
      <span className={s[theme + "-text"]}>homeworks 12</span>

      {/*should work (должно работать)*/}
      {/*SuperSelect or SuperRadio*/}
      <hr />
      <SuperSelect options={themes} onChangeOption={onChangeCallback} />
      <hr />
    </div>
  );
}

export default HW12;
