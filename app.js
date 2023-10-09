import {
  getArtists,
  getAlbums,
  getTracks,
  searchAlbum,
  searchArtist,
  searchTracks,
} from "./rest-service.js";
import * as ListRenderer from "./ListRenderer.js";
import { ArtistRenderer } from "./ArtistRenderer.js";
import { TrackRenderer } from "./TrackRenderer.js";
import { AlbumRenderer } from "./AlbumRenderer.js";

window.addEventListener("load", initApp);

let tracks;
let artists;
let albums;

function initApp() {
  updateTracksList();
  updateArtistsList();
  updateAlbumsList();

  document
    .querySelector("#input-search")
    .addEventListener("keyup", submitSearchAlbum);
  document
    .querySelector("#input-search")
    .addEventListener("search", submitSearchAlbum);
  document
    .querySelector("#input-search")
    .addEventListener("keyup", submitSearchArtist);
  document
    .querySelector("#input-search")
    .addEventListener("search", submitSearchArtist);
  document
    .querySelector("#input-search")
    .addEventListener("keyup", submitSearchTrack);
  document
    .querySelector("#input-search")
    .addEventListener("search", submitSearchTrack);
}

async function updateArtistsList() {
  artists = await getArtists();
  const artistList = ListRenderer.construct(
    artists,
    "#artist-list",
    ArtistRenderer
  );
  artistList.render();
}
async function updateTracksList() {
  tracks = await getTracks();
  const trackList = ListRenderer.construct(
    tracks,
    "#track-list",
    TrackRenderer
  );
  trackList.render();
}
async function updateAlbumsList() {
  albums = await getAlbums();
  console.log(albums);
  const albumList = (albums, "#album-list", AlbumRenderer);
  albumList.render();
}

async function submitSearchArtist(event) {
  event.preventDefault();

  const form = event.target;

  const search = form.value.toLowerCase();

  const searchResult = await searchArtist(search);

  showArtists(searchResult);
}

async function submitSearchAlbum(event) {
  event.preventDefault();

  const form = event.target;

  const search = form.value.toLowerCase();

  const searchResult = await searchAlbum(search);

  showAlbums(searchResult);
}

async function submitSearchTrack(event) {
  event.preventDefault();

  const form = event.target;

  const search = form.value.toLowerCase();

  const searchResult = await searchTracks(search);

  showTracks(searchResult);
}
