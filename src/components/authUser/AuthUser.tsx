import React from "react";
import Journal from "./Journal";

import { api } from "~/utils/api";
import { TabsTsx } from "./TabsTsx";
import { columns } from "../journals-table/columns";
import { DataTable } from "../journals-table/main-table";

function AuthUser() {
  const getJournals = api.journal.getAllJournals.useQuery();
  const { data } = getJournals;

  return (
    <div className="min-h-screen w-full p-4 ">
      <div className="flex justify-end space-x-4">
        {/* <TabsTsx data={data} /> */}
        <Journal />
      </div>
      <div className=" my-4 w-full sm:border sm:p-4">
        <DataTable />
      </div>
    </div>
  );
}

export default AuthUser;
