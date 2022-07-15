import React from "react";
import { useSelector } from "react-redux";

const FinalPage = () => {
  const data = useSelector((state) => state.form.data);

  return (
    <div>
      <h1 className="text-center text-5xl">Final Data</h1>
      <div className="flex flex-wrap gap-4 justify-center mt-6">
        {data.map((item, index) => (
          <div key={index} className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
              <h2 className="text-2xl">{item.name}</h2>
              <p className="text-xl">Age: {item.age}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinalPage;
