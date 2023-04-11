import InputField from "./form-components/InputField";
import TextareaField from "./form-components/TextareaField";
import PrimaryBtn from "./form-components/PrimaryBtn";

const Form = ({ onSubmit }) => {
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <form onSubmit={onSubmit}>
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
