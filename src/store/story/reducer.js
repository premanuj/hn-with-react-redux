import { actionTypes } from "./actions";
import { SUCCESS, REQUEST } from "../constant";

const getInitialState = () => ({
  storyIds: [],
  stories: [],
  page: 0,
  isFetching: false,
  error: ""
});

const story = (state = getInitialState(), { type, payload }) => {
  switch (type) {
    case `${actionTypes.FETCH_STORY_IDS}${REQUEST}`:
    case `${actionTypes.FETCH_STORIES}${REQUEST}`:
      return {
        ...state,
        isFetching: true
      };
    case `${actionTypes.FETCH_STORY_IDS}${SUCCESS}`:
      return {
        ...state,
        ...payload
      };
    case `${actionTypes.FETCH_STORIES}${SUCCESS}`:
      return {
        ...state,
        stories: [...state.stories, ...payload.stories],
        page: state.page + 1,
        isFetching: false
      };
    default:
      return state;
  }
};

export default story;
