localStorage.setItem('user pass', 82566552)

//dynamically
const addToLocalStorage = () => {
    const idInput = document.getElementById('storage-id');
    const id = idInput.value;
    const valueInput = document.getElementById('storage-value');
    const value = valueInput.value;

    // id and value truthy hole condition fulfil krbe mane falsy jara jkono value 
    if (id && value) {
        localStorage.setItem(id, value);
    }
    idInput.value = '';
    valueInput.value = '';
}

//for array

localStorage.setItem('friends', [45, 25, 90])//array hisebe save hbe na

localStorage.setItem('friends', JSON.stringify([45, 25, 90]))//array hbe 

//for object
const pen = {
    price: 50,
    color: "black"
}
localStorage.setItem('pen', pen);//object hisebe hbe na
localStorage.setItem('pen', JSON.stringify(pen));//object hisebe hbe 

//json e data thakle mane string e thakle data parse kre nite hbe

//local storage theke data nite

localStorage.getItem('pen')//parse kre obj krte hbe

const penObj = JSON.parse(localStorage.getItem('pen'));