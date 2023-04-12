import { Buffer } from "buffer";
import QRCode from "qrcode";

import Heading from "./components/Heading";
import Form from "./components/Form";
import Table from "./components/Table";

import { useState } from "react";

function App() {
  const [trs, setTrs] = useState([]);

  const formSubmit = (e) => {
    e.preventDefault();
    let start = e.target.start.value;
    let link = e.target.link.value;
    let names = e.target.names.value.split(",").map((name) => name.trim());
    let trows = [];
    names.forEach((name, index) => {
      let trow = {};
      trow["id"] = parseInt(start) + index;
      trow["name"] = name;
      let buffer = Buffer.from(`BIA_${parseInt(start) + index}_BIA`).toString(
        "base64"
      );
      let url_code = buffer
      // .slice(0, buffer.length - 1);
      QRCode.toDataURL(
        `${link}/${url_code}`,
        {
          margin: 1,
        },
        (err, qr) => {
          if (err) {
            console.log(err);
          }
          trow["qr_base64"] = qr;
        }
      );
      trow["url_code"] = url_code;
      trows.push(trow);
    });
    setTrs(trows);
  };
  return (
    <div className="container mt-5">
      <Heading heading={"QR Generator"} />
      <Form onSubmit={formSubmit} />
      <Table trs={trs} />
    </div>
  );
}

export default App;
