const list = [];
function listFromTo(m, n) {
  for (let i = m; i <= n; i++) {
    list.push(i);
  }
  return list;
}
console.log(listFromTo(1, 11));
