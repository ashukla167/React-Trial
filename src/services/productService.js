export default {
  getAllProducts: function() {
    return fetch("http://demo1853299.mockable.io/products").then(data =>
      data.json()
    );
  },
  getAllFilters: function() {
    return fetch("http://demo1853299.mockable.io/filters").then(data =>
      data.json()
    );
  }
};
