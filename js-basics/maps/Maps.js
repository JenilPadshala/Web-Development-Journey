const store = new Map([
    ["t-shirt", 20],
    ["jeans", 30],
    ["socks", 40],
    ["underwear", 50]
])

let cartTotal = 0;

cartTotal += store.get("t-shirt");
console.log(cartTotal);
store.set("hat",40);
store.delete("socks");

console.log(store.has("jeans"));
console.log(store.size);
store.forEach((value,key) => console.log(`${key} $${value}`));