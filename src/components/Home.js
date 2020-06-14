import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import DashBoard from "./dashboard/DashBoard.container";
import DashContext from "../context/DashContext";
import DashAlert from "./alerts/DashAlert";

export default function Home() {
  const { alert } = useContext(DashContext);
  const { auth } = useContext(AuthContext);

  return (
    <React.Fragment>
      {auth && <DashBoard />}
      {alert.message && <DashAlert {...alert} />}
    </React.Fragment>
  );
}
