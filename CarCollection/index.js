const addCarBtn = document.getElementById("add-car-btn");
addCarBtn.addEventListener("click", () => {
  const table = document
    .getElementById("cars-table")
    .getElementsByTagName("tbody")[0];

  const car = document.createElement("tr");

  const manufacturer = document.createElement("td");
  const manufacturerValue = document.createElement("span");
  const manufacturerInput = document.createElement("input");
  manufacturer.appendChild(manufacturerInput);
  car.appendChild(manufacturer);

  const color = document.createElement("td");
  const colorValue = document.createElement("span");
  const colorInput = document.createElement("input");
  color.appendChild(colorInput);
  car.appendChild(color);

  const actions = document.createElement("td");

  const saveBtn = document.createElement("button");
  saveBtn.innerText = "SAVE";
  actions.appendChild(saveBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "DELETE";
  actions.appendChild(deleteBtn);

  const editBtn = document.createElement("button");
  editBtn.innerText = "EDIT";

  car.appendChild(actions);
  table.appendChild(car);

  saveBtn.addEventListener("click", () => {
    manufacturerValue.innerText = manufacturerInput.value;
    manufacturer.removeChild(manufacturerInput);
    manufacturer.appendChild(manufacturerValue);

    colorValue.innerText = colorInput.value;
    color.removeChild(colorInput);
    color.appendChild(colorValue);

    actions.removeChild(saveBtn);
    actions.insertBefore(editBtn, deleteBtn);
  });

  deleteBtn.addEventListener("click", () => {
    table.removeChild(car);
  });

  editBtn.addEventListener("click", () => {
    manufacturerInput.value = manufacturerValue.innerText;
    manufacturer.removeChild(manufacturerValue);
    manufacturer.appendChild(manufacturerInput);

    colorInput.value = colorValue.innerText;
    color.removeChild(colorValue);
    color.appendChild(colorInput);

    actions.removeChild(editBtn);
    actions.insertBefore(saveBtn, deleteBtn);
  });
});
