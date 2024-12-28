/**
 * @param {{ name: string, quantity: number, category: string }[]} inventory
 * @returns {object} The organized inventory
 */
function organizeInventory(inventory) {
  const organizedInventory = inventory.reduce((obj, current) => {
    //si no existe la categoria, la creamos
    if (!obj[current.category]) obj[current.category] = {};

    //si no existe el juguete, lo creamos
    if (!obj[current.category][current.name])
      obj[current.category][current.name] = 0;

    //añadimos la cantidad
    obj[current.category][current.name] += current.quantity;

    return obj;
  }, {});

  return organizedInventory;
}
