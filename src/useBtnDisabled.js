import { useState } from "react";

export function useBtnDisabled() {
  const [btnDisabled, setBtnDisabled] = useState(true);

  const btnAddCase = (text) => {
    setBtnDisabled(!text.target.value)
  };

  return {
    btnDisabled,
    btnAddCase,
  }
}
