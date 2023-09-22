import { getArtists, getAlbums, getTracks } from "./rest-service.js";

window.addEventListener("load", initApp);

let tracks;
let artists;
let albums;

function initApp() {
  updateTracksList();
  updateArtistsList();
  updateAlbumsList();

  document.querySelector("#input-search").addEventListener("keyup", searchAll);
  document.querySelector("#input-search").addEventListener("search", searchAll);
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

function searchAll(eventValue) {
  const keysSomeArtist = ["artist_name"];
  const keysSomeAlbums = ["album_name"];
  const keysSomeTracks = ["track_name"];
  const valuesSome = [eventValue];

  const resultSomeArtists = artists.filter((artist) => keysSomeArtist.some((key) => valuesSome.some((searchValue) => artist[key].toLowerCase().includes(searchValue.toLowerCase()))));
  const resultSomeAlbums = albums.filter((album) => keysSomeAlbums.some((key) => valuesSome.some((searchValue) => album[key].toLowerCase().includes(searchValue.toLowerCase()))));
  const resultSomeTracks = tracks.filter((track) => keysSomeTracks.some((key) => valuesSome.some((searchValue) => track[key].toLowerCase().includes(searchValue.toLowerCase()))));
  showArtists(resultSomeArtists);
  showAlbums(resultSomeAlbums);
  showTracks(resultSomeTracks);
}

// function searchInMusicbase(searchValue) {
//   searchValue = searchValue.toLowerCase();
//   const artist = artists.find((a) => a.artist_name.toLowerCase() === searchValue);

//   if (!artist) {
//     return "Kunstneren blev ikke fundet.";
//   }

//   const artistTracks = tracks.filter((track) => track.artistName.toLowerCase() === artist.artist_name.toLowerCase());
//   if (!artistTracks) {
//     return "tracket blev ikke fundet.";
//   }
//   return {
//     artist: artist,
//     tracks: artistTracks,
//   };
// }

// function inputSearchChanged(event) {
//   const searchValue = event.target.value;
//   const dataToShow = searchInMusicbase(searchValue);
//   showArtists(dataToShow.artist);
//   showTracks(dataToShow.tracks);
// }
