import React from "react";
import FiltersComp from "./components/FiltersComp";
import ProductComp from "./components/ProductComp";
import Checkout from "./components/Checkout";

export default props => {
  return (
    <div className="height100">
      {(props.pageId != "checkout" && props.pageId != "confirmation") ? <div className="flex directionRow backGroundGrey height100"><div className="flex directionRow flexBasis30 marginRight10 backgroundWhite">
        <FiltersComp
          filters={props.filters}
          filterByText={props.filterByText}
          filterByColor={props.filterByColor}
        />
      </div>
        <div className="flex directionRow flexBasis70 backgroundWhite">
          <ProductComp
            products={props.filteredProducts}
            currentFilters={props.currentFilters}
            sortProducts={props.sortProducts}
            currentSort={props.currentSort}
            goToCheckout={props.goToCheckout}
          />
        </div></div> :
        (props.pageId == "confirmation") ?
          <div className="flex directionColumn justifyCenter alignCenter height100">
            <h1>Shoe Store</h1>
            <h3 style={{ color: 'green' }}>Payment Confirmed! Order Placed</h3>
            <div>Txn Id: 5176866689998778</div>
          </div>
          :
          <Checkout
            price={props.price}
            handlePaymentChange={props.handlePaymentChange}
            currentPayment={props.currentPayment}
            processPayment={props.processPayment}
            processingTransaction={props.processingTransaction}
            showSuccess={props.showSuccess}
          />
      }

    </div>
  );
};
