import { Actions } from 'react-native-router-flux';
import { RECEIVE_ARTICLES } from './types';
import { getArticles } from '../util/articles_api_util';

export const fetchArticles = () => dispatch => {
  getArticles()
    .then( articles => {
      dispatch(receiveArticles(articles))
    })
};

export const receiveArticles = (allArticles) => ({
  type: RECEIVE_ARTICLES,
  allArticles
});
