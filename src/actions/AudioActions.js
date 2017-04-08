import { PLAY_ARTICLE } from './types';

export const playCurrentArticle = (article) => ({
  type: PLAY_ARTICLE,
  article
});
