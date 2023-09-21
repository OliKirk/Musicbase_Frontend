window.addEventListener("load", initApp);

function initApp() {
  document.querySelector("#add-artist-button").addEventListener("click", openArtistDialog);
  document.querySelector("#add-track-button").addEventListener("click", openTrackDialog);
  document.querySelector("#add-album-button").addEventListener("click", openAlbumDialog);
  //   document.querySelector("#add-track-button-album").addEventListener("click", addTrackInputField);
  //   document.querySelector("#add-artist-button-album").addEventListener("click", addArtistInputField);
  document.querySelector("#close-artist-dialog").addEventListener("click", closeArtistDialog);
  document.querySelector("#close-track-dialog").addEventListener("click", closeTrackDialog);
  document.querySelector("#close-album-dialog").addEventListener("click", closeAlbumDialog);
}

function openArtistDialog() {
  document.querySelector("#artist-dialog").showModal();
}
function openTrackDialog() {
  document.querySelector("#track-dialog").showModal();
}
function openAlbumDialog() {
  document.querySelector("#album-dialog").showModal();
}
function closeArtistDialog() {
  document.querySelector("#artist-dialog #artist-input").value = "";
  document.querySelector("#artist-dialog").close();
}

function closeTrackDialog() {
  document.querySelector("#track-input").value = "";
  document.querySelector("#duration-input").value = "";
  document.querySelector("#track-dialog #artist-input").value = "";
  document.querySelector("#track-dialog").close();
}
function closeAlbumDialog() {
  document.querySelector("#album-input").value = "";
  document.querySelector("#album-dialog").close();
}
// function addTrackInputField() {
//   const trackList = document.querySelector("#track-list");
//   const newTrackInput = document.createElement("input");
//   newTrackInput.type = "text";
//   newTrackInput.className = "track-input";
//   newTrackInput.name = "track-title";
//   trackList.appendChild(newTrackInput);
// }
// function addArtistInputField() {
//   const artistList = document.querySelector("#artist-list");
//   const newArtistInput = document.createElement("input");
//   newArtistInput.type = "text";
//   newArtistInput.className = "artist-input";
//   newArtistInput.name = "artist-name";
//   artistList.appendChild(newArtistInput);
// }
// function closeAlbumDialog() {
//   const albumDialog = document.querySelector("#album-dialog");
//   const albumTitleInput = document.querySelector("#album-input");
//   const artistInputs = document.querySelectorAll(".artist-input");
//   const trackInputs = document.querySelectorAll(".track-input");

//   albumTitleInput.value = "";
//   artistInputs.forEach(function (input) {
//     input.value = "";
//   });
//   trackInputs.forEach(function (input) {
//     input.value = "";
//   });

//   trackInputs.forEach(function (input) {
//     input.parentNode.removeChild(input);
//   });

//   artistInputs.forEach(function (input) {
//     input.parentNode.removeChild(input);
//   });

//   addArtistInputField();
//   addTrackInputField();

//   albumDialog.close();
// }
