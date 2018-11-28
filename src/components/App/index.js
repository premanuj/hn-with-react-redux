import { connect } from "react-redux";

import App from "./App";
import { actions } from "../../store/story/actions";
import { hasMoreStoriesSelector } from "../../store/story/selectors";

const mapStateToProps = state => ({
  stories: state.story.stories,
  page: state.story.page,
  storyIds: state.story.storyIds,
  isFetching: state.story.isFetching,
  hasMoreStores: hasMoreStoriesSelector(state)
});

const mapDispatchToProps = dispatch => ({
  fetchStories: ({ storyIds, page }) =>
    dispatch(actions.fetchStories({ storyIds, page })),
  fetchStoriesFirstPage: () => dispatch(actions.fetchStoryIds())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
