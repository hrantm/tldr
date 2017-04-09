import { Actions } from 'react-native-router-flux';
import { RECEIVE_CURRENT_ARTICLE } from './types';

export const setCurrentArticle = (currentArticle) => {
  console.log(currentArticle);
  return {
    type: RECEIVE_CURRENT_ARTICLE,
    currentArticle
  };
};
