import React from "react";
import template from "./template.jsx";
import service from "./services/productService";
import "./style.css";
import update from "react-addons-update";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: "",
      filteredProducts: "",
      currentFilters: { color: [] },
      currentSort: "rel",
      pageId: "",
      price: "",
      currentPayment: "csh",
      processingTransaction: false
    };
    this.products = "";
    this.modifiedProducts = "";
    this.getAllData();

    this.filterByText = this.filterByText.bind(this);
    this.filterByColor = this.filterByColor.bind(this);
    this.sortProducts = this.sortProducts.bind(this);
    this.goToCheckout = this.goToCheckout.bind(this);
    this.handlePaymentChange = this.handlePaymentChange.bind(this);
    this.processPayment = this.processPayment.bind(this);
    this.showSuccess = this.showSuccess.bind(this);
  }

  getAllData() {
    Promise.all([service.getAllProducts(), service.getAllFilters()]).then(
      data => {
        this.products = data[0].products;
        this.setState({
          filteredProducts: data[0].products,
          filters: data[1].filters
        });
      }
    );
  }

  filterByText(e) {
    const filteredProducts = e.target.value
      ? this.state.filteredProducts.filter(prod =>
        prod.brand.includes(e.target.value)
      )
      : this.state.filteredProducts;
    this.setState({
      currentFilters: update(this.state.currentFilters, {
        brand: { $set: e.target.value }
      }),
      filteredProducts: filteredProducts
    });
  }

  filterByColor(e) {
    let newFilters = [];
    if (this.state.currentFilters.color.includes(e.target.value)) {
      newFilters = update(this.state.currentFilters, {
        color: {
          $splice: [
            [
              this.state.currentFilters.color.findIndex(
                col => col == e.target.value
              ),
              1
            ]
          ]
        }
      });
    } else {
      newFilters = update(this.state.currentFilters, {
        color: { $push: [e.target.value] }
      });
    }
    this.setState({
      currentFilters: newFilters,
      filteredProducts: newFilters.color.length
        ? this.products.filter(prod =>
          newFilters.color.includes(prod.colour.color)
        )
        : this.products
    });
  }

  sortProducts(type) {
    let newArr = [];
    if (type == "rel") newArr = this.state.filteredProducts;
    else if (type == "l2h")
      newArr = this.state.filteredProducts.slice().sort(this.sortInc);
    else {
      newArr = this.state.filteredProducts.slice().sort(this.sortDec);
    }
    this.setState({
      filteredProducts: newArr,
      currentSort: type
    });
  }

  sortInc(a, b) {
    if (a.price.final_price < b.price.final_price) return -1;
    else if (a.price.final_price > b.price.final_price) return 1;
    else return 0;
  }

  sortDec(a, b) {
    if (a.price.final_price < b.price.final_price) return 1;
    else if (a.price.final_price > b.price.final_price) return -1;
    else return 0;
  }

  goToCheckout(price) {
    this.setState({
      pageId: 'checkout',
      price: price
    });
  }

  handlePaymentChange(e) {
    this.setState({ currentPayment: e.target.value });
  }

  processPayment() {
    this.setState({
      processingTransaction: true
    })
  }

  showSuccess() {
    console.log('DABA');
    this.setState({
      pageId: "confirmation"
    });
  }

  render() {
    const props = {
      ...this.state,
      filterByText: this.filterByText,
      filterByColor: this.filterByColor,
      sortProducts: this.sortProducts,
      goToCheckout: this.goToCheckout,
      handlePaymentChange: this.handlePaymentChange,
      processPayment: this.processPayment,
      showSuccess: this.showSuccess
    };

    return template(props);
  }
}
