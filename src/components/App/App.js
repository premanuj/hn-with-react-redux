import PropTypes from "prop-types";
import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import Nav from "../Nav";
import List from "../List";

class App extends Component {
  static propTypes = {
    stories: PropTypes.array.isRequired,
    page: PropTypes.number.isRequired,
    storyIds: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    hasMoreStores: PropTypes.bool.isRequired,
    fetchStories: PropTypes.func.isRequired,
    fetchStoriesFirstPage: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.fetchStoriesFirstPage();
  }

  fetchStories = () => {
    const { storyIds, page, fetchStories, isFetching } = this.props;
    if (!isFetching) {
      fetchStories({ storyIds, page });
    }
  };

  render() {
    const { stories, hasMoreStores } = this.props;
    console.log("Props: ", this.fetchStories);
    return (
      <div className="App">
        <Nav />
        {console.log(stories.length, hasMoreStores)}
        <InfiniteScroll
          dataLength={stories.length}
          next={this.fetchStories}
          hasMore={hasMoreStores}
          loading={<h4>Loading...</h4>}
        >
          <List stories={stories} />
        </InfiniteScroll>
      </div>
    );
  }
}

export default App;
