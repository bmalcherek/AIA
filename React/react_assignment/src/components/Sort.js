import React from "react";

const Sort = (props) => {
  const handleChange = (value) => {
    switch (value) {
      case "name-asc":
        props.setSortBy({ sortBy: "name", order: "asc" });
        break;
      case "name-desc":
        props.setSortBy({ sortBy: "name", order: "desc" });
        break;
      case "rating-asc":
        props.setSortBy({ sortBy: "rating", order: "asc" });
        break;
      case "rating-desc":
        props.setSortBy({ sortBy: "rating", order: "desc" });
        break;
      default:
        break;
    }
  };

  const options = [
    { value: "name-asc", label: "Name Ascending" },
    { value: "name-desc", label: "Name Descending" },
    { value: "rating-asc", label: "Rating Ascending" },
    { value: "rating-desc", label: "Rating Descending" },
  ];

  const selectOptions = options.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ));
  return (
    <div className="sort--container">
      <select
        name="sort"
        id="sort"
        className="sort__select"
        onChange={(event) => handleChange(event.target.value)}
      >
        {selectOptions}
      </select>
    </div>
  );
};

export default Sort;
