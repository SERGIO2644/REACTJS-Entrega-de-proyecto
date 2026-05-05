const API_URL = "https://rickandmortyapi.com/api/character";

async function getCharacters({ page = 1, name = "", status = "", species = "" }) {
  const params = new URLSearchParams();
  params.append("page", page);

  if (name.trim() !== "") {
    params.append("name", name.trim());
  }

  if (status !== "") {
    params.append("status", status);
  }

  if (species !== "") {
    params.append("species", species);
  }

  const response = await fetch(`${API_URL}?${params.toString()}`);

  if (!response.ok) {
    throw new Error("No se encontraron personajes con esos filtros.");
  }

  return response.json();
}

async function getEpisodes(episodeUrls) {
  const firstEpisodes = episodeUrls.slice(0, 8);
  const responses = await Promise.all(firstEpisodes.map((url) => fetch(url)));

  return Promise.all(responses.map((response) => response.json()));
}
