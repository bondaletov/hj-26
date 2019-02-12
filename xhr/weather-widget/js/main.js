const request = new XMLHttpRequest();
request.open('GET', 'https://neto-api.herokuapp.com/weather', true);
request.send();

request.addEventListener('load', () => setData(JSON.parse(request.responseText)));