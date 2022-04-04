import React from "react";
import { Form } from "react-bootstrap";
import "../css/header.css";

export default function Search({ handleChange }) {
  return (
    <>
      <Form className="d-flex">
        <input type="text" placeholder="Search" onChange={handleChange} />
      </Form>
    </>
  );
}
