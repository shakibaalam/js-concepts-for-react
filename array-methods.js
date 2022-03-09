const products = [
    { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

const brands = products.map(product => product.brand);
//1. console.log(brands);
const prices = products.map(product => product.price);
// console.log(prices);

//2. products.forEach(product => console.log(product))
// products.forEach(product => console.log(product.color))
// return krbe na 
products.forEach(product => {

})


// 3. filter condition onojai ak ba akadik element filter krbe
const cheap = products.filter(product => product.price <= 5000);
// console.log(cheap);

// array te joto gula n ase sei gula dekabe
const specificName = products.filter(p => p.name.includes('n'));
// console.log(specificName);


//4. find array r first element ta dekabe condition onojai
const special = products.find(p => p.name.includes('n'));
console.log(special);


