import React, { useState } from "react";
import { orderBy } from "lodash";

import Tile from "./Tile";
import AddForm from "./AddForm";
import Sort from "./Sort";

import data from "../data.json";

const List = () => {
  const [items, setItems] = useState(data);
  const [openAddForm, setOpenAddForm] = useState(false);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState({ sortBy: "name", order: "asc" });

  const deleteItem = (name) => {
    setItems(items.filter((item) => item.name !== name));
  };

  let itemList = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  itemList = orderBy(itemList, sortBy.sortBy, sortBy.order);

  const tiles = itemList.map((item) => (
    <Tile deleteItem={deleteItem} data={item} key={item.name} />
  ));

  let addFormComponents = null;
  if (openAddForm) {
    addFormComponents = (
      <div>
        <div className="open" />
        <AddForm
          className="add-form--container"
          setItems={setItems}
          items={items}
          setOpenAddForm={setOpenAddForm}
        />
      </div>
    );
  }

  return (
    <div className="list--container">
      <div className="list__search--wrapper">
        <input
          type="text"
          placeholder="Search"
          className="list__search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>
      {addFormComponents}
      <Sort setSortBy={setSortBy} />
      <div className="list__buttons--container">
        <button className="add-item--btn" onClick={() => setOpenAddForm(true)}>
          ADD ITEM
        </button>
      </div>
      <div className="list__item--container">{tiles}</div>
    </div>
  );
};

export default List;
