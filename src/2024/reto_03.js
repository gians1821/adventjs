/**
 * @param {{ name: string, quantity: number, category: string }[]} inventory
 * @returns {object} The organized inventory
 */
function organizeInventory(inventory) {
  // Code here
  if (inventory.length == 0) return {};
  let categorias = new Set();
  for (const item of inventory) {
    categorias.add(item.category);
  }
  let organizedInventory = new Map();
  for (const categoria of categorias) {
    let objeto = {};
    for (item of inventory) {
      if (item.category == categoria) {
      }
    }
    organizedInventory.set(categoria);
  }
  return categorias;
}

const inventory = [
  { name: "doll", quantity: 5, category: "toys" },
  { name: "car", quantity: 3, category: "toys" },
  { name: "ball", quantity: 2, category: "sports" },
  { name: "car", quantity: 2, category: "toys" },
  { name: "racket", quantity: 4, category: "sports" },
];

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

console.log(organizedInventory);
