import React from "react";
import Journal from "./Journal";

import { api } from "~/utils/api";

import { DataTable } from "../journals-table/main-table";

function AuthUser() {
  const { data } = api.journal.getAllJournals.useQuery();

  return (
    <div className="min-h-screen w-full p-4 ">
      <div className="flex justify-end space-x-4">
        {/* <TabsTsx data={data} /> */}
        <Journal />
      </div>
      <div className=" my-4 w-full sm:border sm:p-4">
        {data && <DataTable data={data} />}
      </div>
    </div>
  );
}

export default AuthUser;
