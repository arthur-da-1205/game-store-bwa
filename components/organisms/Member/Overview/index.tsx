import React from "react";
import TableOverview from "./TableOverview";

export default function OverviewContent() {
  return (
    <div className="latest-transaction">
      <p className="text-lg fw-medium color-palette-1 mb-14">
        Latest Transactions
      </p>
      <div className="main-content main-content-table overflow-auto">
        <table className="table table-borderless">
          <thead>
            <tr className="color-palette-1">
              <th className="text-start" scope="col">
                Game
              </th>
              <th scope="col">Item</th>
              <th scope="col">Price</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <TableOverview
              image="overview-1"
              title="Mobile Legend"
              category="Mobile"
              item="300"
              price={29000}
              status="Pending"
            />
            <TableOverview
              image="overview-2"
              title="Call of Duty:Modern"
              category="Desktop"
              item="500"
              price={740000}
              status="Success"
            />
            <TableOverview
              image="overview-3"
              title="Clash of Clan"
              category="Mobile"
              item="100"
              price={70000}
              status="Failed"
            />
            <TableOverview
              image="overview-4"
              title="The Royal Game"
              category="Mobile"
              item="200"
              price={20000}
              status="Pending"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}
