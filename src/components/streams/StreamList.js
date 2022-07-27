import React from "react";
import { useSelector } from "react-redux";

export default function StreamList() {
  const auth = useSelector((s) => s.loginDetails.auth);

  return <div>{auth ? "yay" : "nay"}</div>;
}
