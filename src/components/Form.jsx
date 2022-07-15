import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../Store/formSlice";
import { Link } from "react-router-dom";
import Alert from "./Alert";

const Form = ({ title = "Title", onGetRoute }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({ name: "", age: "" });
  const [error, setError] = useState({
    name: "",
    age: "",
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
        errorCopy.name = "Mame Must be more than 3 Chars";
      else errorCopy.name = "";
    }

    if (target.name === "age") {
      if (parseInt(target.value) <= 0)
        errorCopy.age = "Age Must be a positive number and greater than zero";
      else errorCopy.age = "";
    }

    setError(errorCopy);
  };

  const handleSubmit = () => {
    dispatch(addData(data));
  };

  return (
    <div className="container mx-auto">
      <form className="flex flex-col items-center ">
          <div className="border p-5 w-96 border-cyan-300 rounded-md">
          <h1 className="text-3xl my-6 text-center font-bold">
          Form -Page {title}
        </h1>
        <div className="form-control w-full max-w-xs">
          <input
            type="text"
            placeholder="Name"
            className="input input-bordered border border-cyan-400 w-full max-w-xs outline-0"
            onChange={handleChange}
            name="name"
          />
          {error.name && <Alert error={error.name} />}
        </div>
        <div className="form-control w-full max-w-xs mt-5">
          <input
            type="number"
            placeholder="Age"
            className="input input-bordered border border-cyan-400 w-full max-w-xs"
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
            className={`w-full max-w-xs py-3 text-center bg-cyan-700 text-white rounded-lg text-xl ${disabled}`}
          >
            Submit
          </Link>
        </div>
          </div>
      </form>
    </div>
  );
};

export default Form;
