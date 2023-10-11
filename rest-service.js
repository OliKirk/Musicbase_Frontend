const endpoint = "https://awohl-musicbase-db.azurewebsites.net";

async function getArtists() {
  const response = await fetch(`${endpoint}/artists`);
  const data = await response.json();
  return data;
}
async function getAlbums() {
  const response = await fetch(`${endpoint}/albums`);
  const data = await response.json();
  return data;
}
async function getTracks() {
  const response = await fetch(`${endpoint}/tracks`);
  const data = await response.json();
  return data;
}
async function searchArtist(searchTerm) {
  const response = await fetch(`${endpoint}search/artists?q=${searchTerm}`);

  const data = await response.json();
  return data;
}

async function searchAlbum(searchTerm) {
  const response = await fetch(`${endpoint}/search/albums?q=${searchTerm}`);
  const data = await response.json();
  return data;
}

async function searchTracks(searchTerm) {
  const response = await fetch(`${endpoint}/search/tracks?q=${searchTerm}`);
  const data = await response.json();
  return data;
}
export { getArtists, getAlbums, getTracks, searchAlbum, searchArtist, searchTracks };
