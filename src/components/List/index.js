import PropTypes from "prop-types";
import React, { Component } from "react";

import ListItem from "../ListItem";

class List extends Component {
  static propsTypes = {
    stories: PropTypes.array.isRequired
  };
  render() {
    const { stories } = this.props;
    return (
      <div className="list-group">
        {stories.map(story => (
          <ListItem key={story.id} {...story} />
        ))}
      </div>
    );
  }
}

export default List;
