import React from "react";
import Journal from "./Journal";
import TableTsx from "../journal-table/TableTsx";

function AuthUser() {
  return (
    <div className=" p-4">
      <Journal />
      <TableTsx />
    </div>
  );
}

export default AuthUser;
