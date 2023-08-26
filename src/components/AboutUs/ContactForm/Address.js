import React from "react";
import ScheduledTable from "./ScheduledTable";
import data from "./data.json";

const Address = () => {
  return (
    <div>
      <div className="grid justify-center text-3xl leading-10 font-semibold tracking-normal capitalize mb-3">
        NK's Cafe
      </div>
      <p className="grid justify-center">113A, Petit Canal Street</p>
      <p className="grid justify-center">Pondicheery, 605001</p>
      <p className="grid justify-center mb-4">India</p>
      <ScheduledTable Data={data} />
    </div>
  );
};

export default Address;
