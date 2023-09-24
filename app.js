import { getArtists, getAlbums, getTracks, searchAlbum, searchArtist, searchTracks } from "./rest-service.js";

window.addEventListener("load", initApp);

let tracks;
let artists;
let albums;

function initApp() {
  updateTracksList();
  updateArtistsList();
  updateAlbumsList();

  document.querySelector("#input-search").addEventListener("keyup", submitSearchAlbum);
  document.querySelector("#input-search").addEventListener("search", submitSearchAlbum);
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

async function submitSearchArtist(event) {
  event.preventDefault();

  const form = event.target;

  const search = form.searchArtistInput.value;

  console.log(`search ${search}`);

  const searchResult = await searchArtist(search);

  console.log(`searchresult ${searchResult}`);

  showArtists(searchResult);
}

async function submitSearchAlbum(event) {
  event.preventDefault();

  const form = event.target;

  const search = form.value.toLowerCase();

  const searchResult = await searchAlbum(search);

  showAlbums(searchResult);
}

async function submitSearchTracks(event) {
  event.preventDefault();

  const form = event.target;

  const search = form.searchTrackInput.value;

  const searchResult = await searchTracks(search);

  showTracks(searchResult);
}
