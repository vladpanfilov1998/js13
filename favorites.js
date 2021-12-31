let favorites = JSON.parse(localStorage.getItem('favorites'));
console.log(favorites)
for (let i = 0; i < favorites.length; i++) {
    let postDiv = document.createElement('div');
    postDiv.classList.add('user');
    postDiv.innerText = favorites[i];
    document.body.appendChild(postDiv);
    let button = document.createElement("button");
    button.innerText = 'СКАСУВАТИ';
    postDiv.appendChild(button);
    button.addEventListener('click', function () {
        postDiv.innerText = 'ТОВАР ВИДАЛЕНО';
    });
}

let clean = document.createElement('button');
clean.innerText = 'ОЧИСТИТИ КОШИК';
document.body.appendChild(clean);
clean.onclick = function () {
    localStorage.clear()
}
