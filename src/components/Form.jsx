import { Buffer } from "buffer";
import QRCode from "qrcode";

import InputField from "./form-components/InputField";
import TextareaField from "./form-components/TextareaField";
import PrimaryBtn from "./form-components/PrimaryBtn";

import { useState } from "react";

const Form = () => {
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
      let url_code = Buffer.from(
        "BIA_" + parseInt(start) + index + "_BIA"
      ).toString("base64");
      QRCode.toDataURL();
      trow["url_code"] = url_code.slice(0, url_code.length - 1);

      trows.push(trow);
    });
    setTrs(trows);
  };
  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={formSubmit}>
          <div className="row">
            <div className="col-12 col-md-6">
              <InputField
                id={"start"}
                name={"start"}
                type={"number"}
                label={"Start Id"}
              />
            </div>
            <div className="col-12 col-md-6">
              <InputField
                id={"link"}
                name={"link"}
                type={"text"}
                label={"Link"}
              />
            </div>
            <div className="col-12">
              <TextareaField id={"names"} name={"names"} label={"Names"} />
            </div>
          </div>
          <PrimaryBtn type={"submit"} title={"Submit"} />
        </form>
      </div>
    </div>
  );
};

export default Form;
