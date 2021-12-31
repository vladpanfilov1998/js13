
let productForm = document.forms.productForm;
productForm.onsubmit = function (e) {
    e.preventDefault();
    let name = this.name.value;
    let number = this.number.value;
    let price = this.price.value
    let index = new Date();
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    favorites.push(JSON.stringify({index: index.getTime(), name: name, number: number, price: price}));
    localStorage.setItem('favorites', JSON.stringify(favorites));
}
