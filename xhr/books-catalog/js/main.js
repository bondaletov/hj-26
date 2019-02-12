const contentEl = document.querySelector('#content');

function loadData() {
    const ENDPOINT = 'https://neto-api.herokuapp.com/book/';
    const request = new XMLHttpRequest();
    request.open('GET', ENDPOINT, true);
    request.send();

    request.addEventListener('load', () => renderData(JSON.parse(request.responseText)));
}

function renderData(data) {
    data.forEach(el => {
        const item = document.createElement('li');
        item.dataset.title = el.title;
        item.dataset.author = el.author.name;
        item.dataset.info = el.info;
        item.dataset.price = el.price;

        const img = document.createElement('img');
        img.setAttribute('src', el.cover.small);
        item.appendChild(img);

        contentEl.appendChild(item);
    })
}

loadData();