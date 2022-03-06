import React from "react";
import { useParams } from "react-router-dom";

export default function Post() {
  let { username,id } = useParams();
  return (
    <>
      <h1>Post page || name : {username} , id : {id}</h1>
    </>
  );
}
