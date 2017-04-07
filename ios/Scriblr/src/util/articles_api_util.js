import axios from 'axios'

export const getArticles = () => {
  return axios({
    method: "GET",
    url: `https://news-backend-123.herokuapp.com/api/articles/`
  });
};
