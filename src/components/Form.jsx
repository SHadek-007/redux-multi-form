import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../Store/formSlice";
import { Link } from "react-router-dom";
import Alert from "./Alert";

const Form = ({ title = "Title", onGetRoute }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({ name: "", age: "" });
  const [error, setError] = useState({
    name: "Input name",
    age: "Input age",
  });
  const [disabled, setDisabled] = useState("btn-disabled");

  useEffect(() => {
    const isDisabled = () => (error.name || error.age ? "btn-disabled" : "");
    setDisabled(isDisabled());
  }, [error]);

  const handleChange = (e) => {
    e.preventDefault();
    const target = e.target;

    const dataCopy = { ...data };
    dataCopy[target.name] = target.value;
    setData(dataCopy);

    const errorCopy = { ...error };
    if (target.name === "name") {
      if (target.value.length < 3)
        errorCopy.name = "name Must be more than 3 chars";
      else errorCopy.name = "";
    }

    if (target.name === "age") {
      if (parseInt(target.value) <= 0)
        errorCopy.age = "age Must be a positive number and greater than zero";
      else errorCopy.age = "";
    }

    setError(errorCopy);
  };

  const handleSubmit = () => {
    dispatch(addData(data));
  };

  return (
    <div className="container mx-auto">
      <form className="flex flex-col items-center">
        <h1 className="text-3xl my-6">
          Form - <strong>Page {title}</strong>
        </h1>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-secondary w-full max-w-xs"
            onChange={handleChange}
            name="name"
          />
          {error.name && <Alert error={error.name} />}
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Age (Number input)</span>
          </label>
          <input
            type="number"
            placeholder="Type here"
            className="input input-bordered input-secondary w-full max-w-xs"
            name="age"
            onChange={handleChange}
          />

          {error.age && <Alert error={error.age} />}
        </div>
        <div className="mt-8">
          <Link
            onClick={handleSubmit}
            to={onGetRoute()}
            type="submit"
            className={`btn btn-success btn-outline btn-wide font-bold text-2xl ${disabled}`}
          >
            Submit
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Form;
