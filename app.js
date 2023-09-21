import { getArtists, getAlbums, getTracks } from "./rest-service.js";

window.addEventListener("load", initApp);

let artists;
let albums;
let tracks;

function initApp() {
  updateAlbumsList();
  updateArtistsList();
  updateTracksList();
}

async function updateArtistsList() {
  artists = await getArtists();
  showArtists(artists);
}
async function updateTracksList() {
  tracks = await getTracks();
  showTracks(tracks);
}
async function updateAlbumsList() {
  albums = await getAlbums();
  showAlbums(albums);
}

function showArtists(list) {
  document.querySelector("#artist-list").innerHTML = "";
  for (const artist of list) {
    const artistHTML = /*html*/ `
    <ul>
      <li>${artist.name}</li>
    </ul>`;
    document.querySelector("#artist-list").insertAdjacentHTML("beforeend", artistHTML);
  }
}
function showTracks(list) {
  document.querySelector("#track-list").innerHTML = "";
  for (const track of list) {
    const trackHTML = /*html*/ `
    <ul>
      <li>${track.title}</li>
      <li>${track.duration}</li>
    </ul>`;
    document.querySelector("#track-list").insertAdjacentHTML("beforeend", trackHTML);
  }
}
function showAlbums(list) {
  document.querySelector("#album-list").innerHTML = "";
  for (const album of list) {
    const albumHTML = /*html*/ `
    <ul>
      <li>${album.title}</li>
    </ul>`;
    document.querySelector("#album-list").insertAdjacentHTML("beforeend", albumHTML);
  }
}
