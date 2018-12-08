
export const fetchEpisodes = (page, name) =>
  fetch(`http://tiny-rick.tk/api/episode/?page=${page}&name=${name}`).then(data =>
    data.json()
  );

export const fetchEpisode = (id) =>
  fetch(`http://tiny-rick.tk/api/episode/${id}`).then(data =>
    data.json()
  );

export const fetchCharacter = id =>
  fetch(`http://tiny-rick.tk/api/character/${id}`).then(data =>
    data.json()
  );
