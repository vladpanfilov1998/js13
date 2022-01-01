let keys = Object.keys(localStorage)
for (let i = 0; i < keys.length; i++) {
    let postDiv = document.createElement('div');
    postDiv.classList.add('user');
    let element = JSON.parse(localStorage.getItem(keys[i]));
    postDiv.innerText = element;
    document.body.appendChild(postDiv);
    let button = document.createElement("button");
    button.innerText = 'СКАСУВАТИ';
    postDiv.appendChild(button);
    button.addEventListener('click', function () {
        localStorage.removeItem(keys[i]);
        postDiv.innerText = 'ТОВАР ВИДАЛЕНО';
    });
}

let clean = document.createElement('button');
clean.innerText = 'ОЧИСТИТИ КОШИК';
document.body.appendChild(clean);
clean.onclick = function () {
    localStorage.clear()
}
