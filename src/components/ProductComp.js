import React from "react";
import SingleProduct from "./SingleProduct";

export default props => {
  return (
    <div className="flex directionColumn full-width">
      <h3 className="marginLeft10">
        {props.products
          ? `Showing ${props.products.length} results for "shoes"`
          : ""}
      </h3>
      {props.products ? (
        <div className="flex directionRow bottomMargin10 marginLeft10">
          <b className="marginRight10">Sort By</b>
          <div
            className={`marginRight10 pointer ${
              props.currentSort == "rel" ? "bolderFont" : ""
              }`}
            onClick={() => props.sortProducts("rel")}
          >
            Relevance
          </div>
          <div
            className={`marginRight10 pointer ${
              props.currentSort == "l2h" ? "bolderFont" : ""
              }`}
            onClick={() => props.sortProducts("l2h")}
          >
            L2H
          </div>
          <div
            className={`marginRight10 pointer ${
              props.currentSort == "h2l" ? "bolderFont" : ""
              }`}
            onClick={() => props.sortProducts("h2l")}
          >
            H2L
          </div>
        </div>
      ) : (
          ""
        )}

      <div className="flex directionRow flexWrap justifyProducts">
        {props.products
          ? props.products.map(prod => {
            return <SingleProduct product={prod} goToCheckout={props.goToCheckout} />;
          })
          : ""}
      </div>
    </div>
  );
};
