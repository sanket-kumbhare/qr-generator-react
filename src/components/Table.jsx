import React from "react";
import TableRows from "./table-components/TableRow";

const Table = ({ trs }) => {
  console.log("render");
  return (
    <div className="mt-3 shadow-sm rounded">
      <table className="table table-bordered">
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Name</th>
            <th>URL Code</th>
            <th>QR Code</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {trs.map((tr, index) => {
            return (
              <TableRows
                key={tr.id}
                id={tr.id}
                std_name={tr.name}
                url_code={tr.url_code}
                qr_code={tr.qr_base64}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
