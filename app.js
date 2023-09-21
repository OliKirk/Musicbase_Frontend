window.addEventListener("load", initApp);

function initApp() {
  document.querySelector("#add-album-button").addEventListener("click", openAlbumDialog);
  document.querySelector("#add-track-button-album").addEventListener("click", addTrackInputField);
}

function openAlbumDialog() {
  const albumDialog = document.querySelector("#album-dialog");
  albumDialog.showModal();
}

function addTrackInputField() {
  const trackList = document.querySelector("#track-list");
  const newTrackInput = document.createElement("input");
  newTrackInput.type = "text";
  newTrackInput.className = "trackInput";
  newTrackInput.name = "track-title";
  trackList.appendChild(newTrackInput);
}
