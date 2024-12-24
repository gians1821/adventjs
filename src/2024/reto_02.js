/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
  // Code here
  let anchoMayor = 0;
  let frame = "";
  for (const name of names) {
    if (name.length > anchoMayor) anchoMayor = name.length;
  }
  anchoMayor += 4;
  frame += "*".repeat(anchoMayor);
  for (const name of names) {
    frame += "\n";
    frame += "* ";
    frame += name + " ".repeat(anchoMayor - 4 - name.length);
    frame += " *";
  }
  frame += "\n";
  frame += "*".repeat(anchoMayor);
  return frame;
}
