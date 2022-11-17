import React, { useEffect, useState } from "react";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import { RequestsAPI } from "./api/RequestsAPI";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

export const Request = () => {
  const [checked, setChecked] = useState(false);
  const [sendRequest, setSendRequest] = useState(false);
  const [requestValue, setRequestValue] = useState("");

  useEffect(() => {
    RequestsAPI.postRequest(checked)
      .then((r) => {
        setRequestValue(`${r.data.errorText}, ${r.data.info}`);
      })
      .catch((er) => {
        console.log({ ...er });

        setRequestValue(
          er.response
            ? `${er.response.data.errorText}, ${er.response.data.info}`
            : er.message
        );
      });
  }, [sendRequest]);
  const onClickHandler = () => {
    setSendRequest(!sendRequest);
  };
  return (
    <>
      <div style={{ display: "flex", alignItems: "center" }}>
        <SuperCheckbox onChangeChecked={setChecked} />
        <SuperButton onClick={onClickHandler}>Send request</SuperButton>
      </div>
      <span>{requestValue}</span>
    </>
  );
};
