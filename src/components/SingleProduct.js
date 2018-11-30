import React from "react";

export default props => {
  return (
    <div className="flex directionColumn productBox marginProducts pointer" onClick={() => props.goToCheckout(props.product.price.final_price)}>
      <img src={props.product.image} height="250px" />

      <div className="marginTop10">{props.product.title}</div>
      <div className="backGroundStar marginTop5">{props.product.rating} ★</div>
      <div className="flex directionRow marginTop5">
        <div className="marginRight10">{props.product.price.final_price}</div>
        <div className="marginRight10 lineThrough">
          {props.product.price.mrp}
        </div>
        <div className="boldGreen">{`${props.product.discount}% off`}</div>
      </div>
    </div>
  );
};
