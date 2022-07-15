import React from "react";
import Form from "./Form";

const Page3 = () => {
  const handleGetRoute = () => "/final";
  return <Form title="Three" onGetRoute={handleGetRoute} />;
};

export default Page3;
