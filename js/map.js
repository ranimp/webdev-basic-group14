const mymap = L.map('map').setView([0.87055087865876, 104.47572573637169], 15);
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">osm</a> contributors'
const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
const tiles = L.tileLayer(tileURL, {attribution});
tiles.addTo(mymap);

const marker = L.marker([0.87055087865876, 104.47572573637169]).addTo(mymap);