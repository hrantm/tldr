import { RAW_TEXT_CHANGED } from './types';
import firebase from 'firebase';

export const rawTextChanged = (rawText) => {
  return {
    type: RAW_TEXT_CHANGED,
    rawText
  };
};
