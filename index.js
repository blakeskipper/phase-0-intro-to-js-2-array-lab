const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat() {
    cats.push("Ralph");
}
function destructivelyPrependCat() {
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat() {
    cats.pop()
}
function destructivelyRemoveFirstCat() {
    cats.shift()
}
function appendCat(name){
    const allCats = [...cats]
    allCats.push(name);
    return allCats;
}
function prependCat(name){
    const allCats = [...cats]
    allCats.unshift(name);
    return allCats;
}
function removeLastCat(name){
    const allCats = [...cats]
    allCats.pop(name);
    return allCats;
}
function removeFirstCat(name){
    const allCats = [...cats]
    allCats.shift(name);
    return allCats;
}