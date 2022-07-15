import React from "react";
import Form from "./Form";

const Page2 = () => {
  const handleGetRoute = () => "/page3";
  return <Form title="Two" onGetRoute={handleGetRoute} />;
};

export default Page2;
