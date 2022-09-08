import React from "react";

const ContainerPage = (props) => {
  return <div {...props}> {props.children} </div>;
};

export default ContainerPage;
