const endpoint = "http://localhost:4000";

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
  const response = await fetch(`${endpoint}/artists/searchq=${searchTerm}`);

  console.log(`repsonse ${response}`);
  const data = await response.json();
  console.log(`data ${data}`);
  return data;
}

async function searchAlbum(searchTerm) {
  const response = await fetch(`${endpoint}/albums/searchq=${searchTerm}`);
  const data = await response.json();
  return data;
}

async function searchTracks(searchTerm) {
  const response = await fetch(`${endpoint}/tracks/searchq=${searchTerm}`);
  const data = await response.json();
  return data;
}
export { getArtists, getAlbums, getTracks, searchAlbum, searchArtist, searchTracks };
