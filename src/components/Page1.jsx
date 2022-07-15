import React from "react";
import Form from "./Form";

const Page1 = () => {
  const handleGetRoute = () => "/page2";
  return <Form title="One" onGetRoute={handleGetRoute} />;
};

export default Page1;
