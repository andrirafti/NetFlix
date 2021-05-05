import api from './api-config'

// for NON-children models this whole area works..//
//if you want a to make this  for a child check trainers..//
export const getAllFilms = async () => {
  const resp = await api.get('/films');
  return resp.data;
}
export const getOneFilm = async (id) => {
  const resp = await api.get(`/films/${id}`);
  return resp.data;
}
//IF WE WANT to make a new gym,update one,delete one we can do it in here or not..//
//in my case all i want to do is show it, and show a specefic id of a gym and trainer..//
//only time i will do FULL Crud is for the clients./// 
export const postFilm = async (filmData) => {
  const resp = await api.post('/films', { film: filmData });
  return resp.data;
}

export const putFilm = async (id, filmData) => {
  const resp = await api.put(`/films/${id}`, { film: filmData });
  return resp.data;
}