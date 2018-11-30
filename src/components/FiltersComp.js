import React from "react";

export default props => {
  const { currentFilters, filters } = props;

  return (
    <div className="flex directionColumn">
      <h3>Filters</h3>
      <hr />

      <b>PRICE</b>
      <div className="flex directionRow">
        <div>
          <select>
            {props.filters
              ? props.filters[2].values.map(filter => {
                  return (
                    <option value={filter.key}>{filter.displayValue}</option>
                  );
                })
              : ""}
          </select>
        </div>
        <div>to</div>
        <div>
          <select>
            {props.filters
              ? props.filters[2].values.map(filter => {
                  return (
                    <option value={filter.key}>{filter.displayValue}</option>
                  );
                })
              : ""}
          </select>
        </div>
      </div>
      <b>Brand</b>
      <input type="text" onChange={props.filterByText} />
      <b>Color</b>
      <div className="flex directionColumn">
        {filters
          ? filters[1].values.map(color => {
              return (
                <div>
                  <input
                    type="checkbox"
                    name="vehicle"
                    value={color.color}
                    id={color.value}
                    onClick={props.filterByColor}
                  />
                  <label for={color.value}>{color.title}</label>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
};
