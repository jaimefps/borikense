module.exports = function apply (str, accent) {
  let mem = str;
  for (let quirk in accent) {
    mem = accent[quirk].method(mem);
  }
  return mem;
};