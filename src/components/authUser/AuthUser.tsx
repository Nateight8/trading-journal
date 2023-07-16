import React from "react";
import Journal from "./Journal";
import TableTsx from "../journal-table/TableTsx";

function AuthUser() {
  return (
    <div className=" flex min-h-screen w-full items-center justify-center p-4 ">
      <Journal />
      {/* <TableTsx /> */}
    </div>
  );
}

export default AuthUser;
