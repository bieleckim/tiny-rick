
import { identity, pickBy } from 'lodash';

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

export const fetchComments = id =>
  fetch(`http://tiny-rick.tk/api/episode/${id}/comments`).then(data =>
    data.json()
  );

export const postComment = (episodeId, comment) => {
  return fetch(`http://tiny-rick.tk/api/episode/${episodeId}/comments`, {
    method: 'POST',
    body: JSON.stringify(pickBy(comment, identity)),
    headers:{
      'Content-Type': 'application/json'
    }
  })
    .then(data => data.json());
}

export const fetchQuestions = () => fetch(`http://tiny-rick.tk/api/questions`)
  .then(data => data.json())

export const postQuizAnswers = (answers) => {
  return fetch(`http://tiny-rick.tk/api/quiz`, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(answers),
    headers:{
      'Content-Type': 'application/json'
    }
  })
    .then(data => data.json());
};
