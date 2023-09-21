import { getArtists, getAlbums, getTracks } from "./rest-service.js";

window.addEventListener("load", initApp);

let tracks;
let artists;
let albums;

function initApp() {
  updateTracksList();
  updateArtistsList();
  updateAlbumsList();
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
    <ul type="none">
      <li>${artist.artist_name}</li>
    </ul>`;
    document.querySelector("#artist-list").insertAdjacentHTML("beforeend", artistHTML);
  }
}
function showTracks(list) {
  document.querySelector("#track-list").innerHTML = "";
  for (const track of list) {
    const trackHTML = /*html*/ `
    <ol type="">
      <li>${track.track_name}</li>
    </ol>`;
    document.querySelector("#track-list").insertAdjacentHTML("beforeend", trackHTML);
  }
}
function showAlbums(list) {
  document.querySelector("#album-list").innerHTML = "";
  for (const album of list) {
    const albumHTML = /*html*/ `
    <ul type="none">
      <li>${album.album_name}</li>
    </ul>`;
    document.querySelector("#album-list").insertAdjacentHTML("beforeend", albumHTML);
  }
}
