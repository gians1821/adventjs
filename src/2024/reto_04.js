/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
function createXmasTree(height, ornament) {
  const width = height * 2 - 1;
  let tree = "";
  for (let i = 0; i < height; i++) {
    const line_repeat = (i + 1) * 2 - 1;
    let line_ornament = ornament
      .repeat(line_repeat)
      .padStart((width - line_repeat) / 2 + line_repeat, "_");
    line_ornament = line_ornament.padEnd(width, "_");
    tree += line_ornament;
    tree += "\n";
  }
  const space = (width - 1) / 2 + 1;
  tree += "#".padStart(space, "_").padEnd(width, "_");
  tree += "\n";
  tree += "#".padStart(space, "_").padEnd(width, "_");
  return tree;
}
