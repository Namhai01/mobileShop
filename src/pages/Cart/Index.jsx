import React from "react";
import Customer from "./Customer";
import CartList from "./CartList";
import Pagination from "../../shared/components/layout/Pagination";

function Card() {
  return (
    <>
      <CartList />
      <Customer />
      {/* <Pagination /> */}
    </>
  );
}

export default Card;
